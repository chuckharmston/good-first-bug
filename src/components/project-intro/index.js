import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import URI from 'urijs';

import { taskStatus } from '../../actions/tasks';
import Loading from '../../components/loading';

import './index.css';

export class ProjectIntroItem extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  };

  thumbnailBg() {
    const { thumbnail } = this.props;
    return `url('/thumbnail/${thumbnail}') no-repeat 110px 30px`;
  }

  gradientBg() {
    const { colors } = this.props;
    return `#F2F2F2 linear-gradient(135deg, rgb(${colors[0]}), rgb(${colors[1]})) no-repeat`;
  }

  style() {
    return {
      background: `${this.thumbnailBg()}, ${this.gradientBg()}`,
      backgroundSize: '80px 80px, 300px 140px'
    };
  }

  href() {
    return new URI('/tasks/').query({ repo: this.props.repo }).toString();
  }

  handleClick(evt) {
    const { repo, setFilters } = this.props;
    setFilters({ repo });
    evt.preventDefault();
    evt.stopPropagation();
  }

  render() {
    const { description, name } = this.props;
    return (
      <li
        className="project-intro--item"
        onClick={evt => this.handleClick(evt)}
      >
        <Link
          style={this.style()}
          to={this.href()}
          onClick={evt => this.handleClick(evt)}
        >
          <header>
            <h3>{name}</h3>
            <p>{description}</p>
          </header>
          <button onClick={evt => this.handleClick(evt)}>See Tasks</button>
        </Link>
      </li>
    );
  }
}

export default class ProjectIntro extends Component {
  static propTypes = {
    repos: PropTypes.array
  };

  static defaultProps = {
    repos: []
  };

  renderHeader() {
    return <h2>Tasks by Project</h2>;
  }

  renderLoading() {
    return (
      <section className="project-intro project-intro--loading">
        {this.renderHeader()}
        <Loading className="blue" />
      </section>
    );
  }

  render() {
    const { repos, setFilters, status } = this.props;
    const { ERROR, INIT, PENDING } = taskStatus;
    if ([INIT, PENDING].includes(status)) {
      return this.renderLoading();
    } else if (!repos.length || status === ERROR) {
      return null;
    }
    return (
      <section className="project-intro">
        {this.renderHeader()}
        <ul>
          {repos.map(repo => (
            <ProjectIntroItem setFilters={setFilters} {...repo} />
          ))}
        </ul>
      </section>
    );
  }
}
