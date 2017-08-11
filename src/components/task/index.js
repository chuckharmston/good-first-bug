import React, { Component } from 'react';
import PropTypes from 'prop-types';

import LabelList from '../labels';
import './index.css';

export default class Task extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    number: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.object),
    assignee: PropTypes.object,
    repo: PropTypes.object
  };

  static defaultProps = {
    skills: [],
    assignee: null,
    repo: null
  };

  renderAssignee() {
    const assignee = this.props.assignee ? this.props.assignee.login : 'nobody';
    return (
      <div className="issue--assignee">
        Assigned to <strong>{assignee}</strong>
      </div>
    );
  }

  render() {
    const { url, repo, skills, title } = this.props;
    return (
      <li className="task">
        <a href={url} target="_blank">
          <LabelList labels={skills} repo={repo} />
          <h3>{title}</h3>
          {this.renderAssignee()}
        </a>
      </li>
    );
  }
}
