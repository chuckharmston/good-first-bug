import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { docs } from '../../config';

import Button from '../button';

import './index.css';

export class DocsNavigationItem extends Component {
  static propTypes = {
    active: PropTypes.bool,
    className: PropTypes.string,
    text: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired
  };

  static defaultProps = {
    active: false,
    className: null
  };

  className() {
    const { active, className } = this.props;
    return classnames('docs-navigation--item', className, { active: active });
  }

  render() {
    const { text, to } = this.props;
    return (
      <li className={this.className()}>
        <Link to={to}>{text}</Link>
      </li>
    );
  }
}

export default class DocsNavigation extends Component {
  renderNavItem(doc, idx) {
    const { slug, title } = doc;
    const { currentPath } = this.props;
    const to = `/docs/${slug}/`;
    const active = to === currentPath;
    return (
      <DocsNavigationItem key={idx} text={title} to={to} active={active} />
    );
  }

  render() {
    return (
      <nav className="docs-navigation">
        <ul>
          <DocsNavigationItem
            className="docs-navigation--back"
            to="/"
            text="Back"
          />
          {docs.map((doc, idx) => this.renderNavItem(doc, idx))}
        </ul>
        <Button to="/tasks/" text="Find a Task" />
      </nav>
    );
  }
}
