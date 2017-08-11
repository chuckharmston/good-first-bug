import React, { Component } from 'react';
import { connect } from 'react-redux';

import GitHub from '../../github';
import { filterActions } from '../../actions/filters';
import { taskStatus } from '../../actions/tasks';
import Header from '../../components/header';
import Loading from '../../components/loading';
import TaskFilters from '../../components/task-filters';
import TaskList from '../../components/task-list';
import filteredTasks from '../../selectors/filters';

import './index.css';

export class Tasks extends Component {
  renderWrapper(elem) {
    return (
      <div>
        <Header />
        <main className="tasks">
          {elem}
        </main>
      </div>
    );
  }

  renderFilters() {
    const { changeRepo, changeSkill, filters, repos, skills } = this.props;
    return (
      <TaskFilters
        available={{ repos, skills }}
        changeRepo={changeRepo}
        changeSkill={changeSkill}
        repo={filters.repo}
        skill={filters.skill}
      />
    );
  }

  resetFilters(evt) {
    evt.preventDefault();
    const { changeRepo, changeSkill } = this.props;
    changeRepo(null);
    changeSkill(null);
  }

  getManualUrl() {
    const query = encodeURIComponent(GitHub.makeQuery());
    return `https://github.com/search?q=${query}&type=Issues`;
  }

  renderError() {
    return this.renderWrapper(
      <div className="tasks--view">
        {this.renderFilters()}
        <p className="tasks--error">
          There was an error fetching the list of tasks from GitHub; you were
          most likely rate-limited. Try <a href={this.getManualUrl()}>
            looking
            them up manually
          </a>?
        </p>
      </div>
    );
  }

  renderEmpty() {
    return this.renderWrapper(
      <div className="tasks--view">
        {this.renderFilters()}
        <p className="tasks--empty">
          No tasks match the filters you have selected.
          {' '}
          <a href="" onClick={evt => this.resetFilters(evt)}>Reset them?</a>
        </p>
      </div>
    );
  }

  renderTasks() {
    const { tasks } = this.props;
    return this.renderWrapper(
      <div className="tasks--view">
        {this.renderFilters()}
        <TaskList tasks={tasks} />
      </div>
    );
  }

  render() {
    const { status, tasks } = this.props;
    if ([taskStatus.INIT, taskStatus.PENDING].includes(status)) {
      return this.renderWrapper(<Loading extraClass="loading--white" />);
    } else if (status === taskStatus.ERROR) {
      return this.renderError();
    } else if (!tasks || tasks.length === 0) {
      return this.renderEmpty();
    }
    return this.renderTasks();
  }
}

const mapStateToProps = state => ({
  filters: {
    repo: state.filters.repo,
    skill: state.filters.skill
  },
  repos: state.filters.available.repos,
  skills: state.filters.available.skills,
  status: state.tasks.status,
  tasks: filteredTasks(state)
});

const mapDispatchToProps = dispatch => ({
  changeRepo: repo => dispatch(filterActions.changeRepoFilter(repo)),
  changeSkill: repo => dispatch(filterActions.changeSkillFilter(repo))
});

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
