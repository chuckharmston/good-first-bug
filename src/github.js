/*global fetch, Headers, process, Request*/

import { filterActions } from './actions/filters';
import {
  taskActions as actions,
  taskActionTypes as actionTypes
} from './actions/tasks';

import { skills, tag, repos } from './config';
import get from './xhr';

const repoMap = repos.reduce((accum, repo) => {
  accum[repo.repo] = repo;
  return accum;
}, {});

const getRepo = repoUrl => {
  return repoMap[repoUrl.replace('https://api.github.com/repos/', '')];
};

const skillMap = skills.reduce((accum, skill) => {
  accum[skill.tag] = skill;
  return accum;
}, {});

const getSkill = label => skillMap[label.name];

const getSkills = labels =>
  labels.reduce((accum, label) => {
    if (Object.keys(skillMap).includes(label.name)) {
      accum.push(getSkill(label));
    }
    return accum;
  }, []);

const getFilters = issues => {
  const filters = {
    repos: [],
    skills: []
  };
  issues.forEach(issue => {
    if (!filters.repos.includes(issue.repo)) {
      filters.repos.push(issue.repo);
    }
    issue.skills.forEach(skill => {
      if (!filters.skills.includes(skill)) {
        filters.skills.push(skill);
      }
    });
  });
  return filters;
};

export default class GitHub {
  static reduceIssue = issue => ({
    title: issue.title,
    number: issue.number,
    id: issue.id,
    url: issue.html_url,
    assignee: issue.assignee,
    repo: getRepo(issue.repository_url),
    skills: getSkills(issue.labels)
  });

  static repoList = () => {
    return repos.reduce((acc, repo) => {
      return `${acc} repo:${repo.repo}`;
    }, '');
  };

  static makeQuery = () => {
    return `label:"${tag}" state:open type:issue ${GitHub.repoList()}`;
  };

  static createRequest = url => {
    if (url === null) {
      const query = encodeURIComponent(GitHub.makeQuery());
      url = `https://api.github.com/search/issues?q=${query}&per_page=100`;
    }
    const headers = [];
    if (process.env.REACT_APP_GITHUB_TOKEN) {
      headers.append([
        'Authorization',
        `token ${process.env.REACT_APP_GITHUB_TOKEN}`
      ]);
    }
    return { url, headers };
  };

  static getNextLink = req => {
    const link = req.getResponseHeader('Link');
    if (!link) {
      return false;
    }
    return link.split(', ').reduce((acc, piece) => {
      if (piece.endsWith('rel="next"')) {
        acc = piece.replace('>; rel="next"', '').replace(/^</, '');
      }
      return acc;
    }, null);
  };

  static makeRequest = (
    outerResolve = null,
    outerReject = null,
    cumulative = [],
    next = null
  ) => {
    return new Promise((innerResolve, innerReject) => {
      const { url, headers } = GitHub.createRequest(next);
      get(url, headers)
        .then(req => {
          const data = JSON.parse(req.response);
          const nextLink = GitHub.getNextLink(req);
          const items = cumulative.concat(data.items.map(GitHub.reduceIssue));
          if (nextLink) {
            GitHub.makeRequest(
              outerResolve || innerResolve,
              outerReject || innerReject,
              items,
              nextLink
            );
            if (outerResolve !== null) {
              innerResolve();
            }
          } else {
            if (outerResolve !== null) {
              outerResolve(items);
            } else {
              innerResolve(items);
            }
          }
        })
        .catch(err => {
          innerReject(err);
          if (outerReject !== null) {
            outerReject(err);
          }
        });
    });
  };

  static middleware = store => next => action => {
    switch (action.type) {
      case actionTypes.TASKS_FETCH:
        GitHub.makeRequest()
          .then(data => {
            store.dispatch(actions.completeTasks(data));
            store.dispatch(filterActions.setAvailableFilters(getFilters(data)));
          })
          .catch(err => {
            console.log(err);
            store.dispatch(actions.errorTasks(err));
          });
        break;

      case actionTypes.TASKS_COMPLETE:
        break;

      case actionTypes.TASKS_ERROR:
        break;

      default:
        break;
    }
    next(action);
  };
}
