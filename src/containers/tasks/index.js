import React, { Component } from 'react';
import { connect } from 'react-redux';

import GitHub from '../../github';
import { filterActions } from '../../actions/filters';
import { taskStatus } from '../../actions/tasks';
import Loading from '../../components/loading';
import TaskList from '../../components/task-list';

import './index.css';

export class Tasks extends Component {
  errorUrl() {
    return `https://github.com/search?q=${GitHub.query}`;
  }

  renderError() {
    return (
      <div className="tasks tasks--error">
        <h2>Uh oh!</h2>
        <p>
          We weren't able to get the list of tasks from GitHub. Sorry about that! We're on the case. In the meantime, you could
          {' '}
          <a href={`https://github.com/search?q=${GitHub.query}`}>
            search GitHub manually
          </a>
          .
        </p>
      </div>
    );
  }

  renderLoading() {
    return (
      <div className="tasks tasks--loading">
        <Loading />
      </div>
    );
  }

  renderTasks() {
    const { tasks } = this.props;
    return (
      <div className="tasks tasks--list">
        <h2>Tasks</h2>
        <p>Repo: {this.props.filters.repo || 'none'}</p>
        <p>Skill: {this.props.filters.skill || 'none'}</p>
        <p />
        <TaskList tasks={tasks} />
      </div>
    );
  }

  render() {
    const { status, tasks } = this.props;
    const { ERROR, INIT, PENDING } = taskStatus;
    if ([INIT, PENDING].includes(status)) {
      return this.renderLoading();
    } else if (status === ERROR || !tasks.length) {
      return this.renderError();
    }
    return this.renderTasks();
  }
}

const mapStateToProps = state => ({
  filters: state.filters,
  status: state.tasks.status,
  tasks: state.tasks.data
});

const mapDispatchToProps = dispatch => ({
  setFilters: opts => dispatch(filterActions.filterSet(opts))
});

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
