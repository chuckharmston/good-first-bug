import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import './index.css';

export default class Loading extends Component {
  static propTypes = {
    className: PropTypes.string.isRequired
  };

  static defaultProps = {
    className: 'default'
  };

  getClassNames() {
    const { className } = this.props;
    return classnames('loading', `loading--${className}`);
  }

  render() {
    return (
      <div className={this.getClassNames()}>
        <div />
        <div />
        <div />
        <div />
      </div>
    );
  }
}
