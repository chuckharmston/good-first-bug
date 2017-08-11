import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { docs } from '../../config';

import './index.css';

export class DocsIntroLink extends Component {
  static propTypes = {
    icon: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  };

  getStyle() {
    const { icon } = this.props;
    return {
      backgroundImage: `url('/docs-intro/${icon}')`
    };
  }

  render() {
    const { slug, subtitle, title } = this.props;
    return (
      <li className="docs-intro--link">
        <Link to={`/docs/${slug}/`} style={this.getStyle()}>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </Link>
      </li>
    );
  }
}

export default class DocsIntro extends Component {
  renderList() {
    return (
      <ul>
        {docs.map((doc, idx) => <DocsIntroLink key={idx} {...doc} />)}
      </ul>
    );
  }

  render() {
    return (
      <section id="docs-intro" className="docs-intro">
        {this.renderList()}
      </section>
    );
  }
}
