import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.css';

export class Label extends Component {
  static propTypes = {
    className: PropTypes.string.isRequired,
    name: PropTypes.string
  };

  render() {
    const { className, name } = this.props;
    return <span className={`label label--${className}`}>{name}</span>;
  }
}

export default class LabelList extends Component {
  static propTypes = {
    labels: PropTypes.arrayOf(PropTypes.object),
    repo: PropTypes.object.isRequired
  };

  static defaultProps = {
    labels: [],
    repo: null
  };

  renderRepo() {
    if (!this.props.repo) {
      return null;
    }
    const { name, repo } = this.props.repo;
    return <Label key={repo} className="project" name={name} />;
  }

  renderSkill(label, key) {
    const { id, name } = label;
    return <Label key={`${id}_${key}`} className="skill" name={name} />;
  }

  render() {
    const { labels } = this.props;
    return (
      <div className="label-list">
        {this.renderRepo()}
        {labels.map((label, index) => this.renderSkill(label, index))}
      </div>
    );
  }
}
