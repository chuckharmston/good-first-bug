import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Task from '../task';
import './index.css';

export default class TaskList extends Component {
  static propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.object)
  };

  static defaultProps = {
    tasks: []
  };

  renderTask(task) {
    return <Task key={task.id} {...task} />;
  }

  render() {
    const { tasks } = this.props;
    if (tasks.length) {
      return (
        <ol className="task-list">
          {tasks.map(task => this.renderTask(task))}
        </ol>
      );
    }
    return null;
  }
}
