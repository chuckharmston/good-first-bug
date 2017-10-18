import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.css';

export class Wrapper extends Component {
  static propTypes = {
    extraClass: PropTypes.string.isRequired
  };

  render() {
    const { children, extraClass, innerStyles } = this.props;
    return (
      <div className={`wrapper wrapper--${extraClass}`}>
        <div className="wrapper--inner" style={innerStyles}>
          {children}
        </div>
      </div>
    );
  }
}

export class Width extends Component {
  static propTypes = {
    minWidth: PropTypes.string,
    width: PropTypes.string
  };

  getStyle() {
    return ['minWidth', 'width'].reduce((accum, item) => {
      if (this.props.hasOwnProperty(item)) {
        accum[item] = this.props[item];
      }
      return accum;
    }, {});
  }

  render() {
    const { children } = this.props;
    return (
      <div style={this.getStyle()}>
        {children}
      </div>
    );
  }
}
