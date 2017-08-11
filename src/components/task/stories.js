import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { repos, skills } from '../../config.json';
import Task from './index';
import { labelFactory } from '../labels/stories';
import { wrapper } from '../wrapper/decorator';

export const taskProps = (overrides = {}) =>
  Object.assign(
    {},
    {
      id: 1,
      number: 123,
      url: 'https://github.com/mozilla/testpilot/tasks/1',
      title: 'Setup Sugardough Base',
      assignee: {
        login: 'lmorchard',
        html_url: 'https://github.com/lmorchard'
      },
      skills: skills.slice(0, 2),
      repo: repos[0]
    },
    overrides
  );

export const taskFactory = n => {
  return [...Array(n).keys()].map(key => {
    return taskProps({
      key: key,
      id: key,
      title: `This is task #${key + 1}`
    });
  });
};

storiesOf('Task', module)
  .addDecorator(wrapper('dark'))
  .add('With all information', () => (
    <ol className="task-list">
      <Task {...taskProps()} />
    </ol>
  ))
  .add('With no assignee', () => (
    <ol className="task-list">
      <Task
        {...taskProps({
          assignee: null
        })}
      />
    </ol>
  ))
  .add('With no repo', () => (
    <ol className="task-list">
      <Task
        {...taskProps({
          repo: null
        })}
      />
    </ol>
  ))
  .add('With no skills', () => (
    <ol className="task-list">
      <Task
        {...taskProps({
          skills: []
        })}
      />
    </ol>
  ))
  .add('With no labels', () => (
    <ol className="task-list">
      <Task
        {...taskProps({
          skills: [],
          repo: null
        })}
      />
    </ol>
  ));
