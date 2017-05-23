import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Label from '../label';
import './index.css';

export default class LabelList extends Component {
  static propTypes = {
    labels: PropTypes.arrayOf(PropTypes.object),
    repo: PropTypes.object.isRequired
  };

  static defaultProps = {
    labels: [],
    repo: {}
  };

  renderSkill(label) {
    const { id, name } = label;
    return <Label key={id} prefix="Skill" name={name} />;
  }

  renderRepo() {
    const { colors, name } = this.props.repo;
    return (
      <Label
        prefix="Project"
        name={name}
        color={colors.length ? colors[0] : '0, 0, 0'}
      />
    );
  }

  render() {
    const { labels } = this.props;
    return (
      <div className="label-list">
        {this.renderRepo()}
        {labels.map(label => this.renderSkill(label))}
      </div>
    );
  }
}
