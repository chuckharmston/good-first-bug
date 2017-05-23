import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { taskStatus } from '../../actions/tasks';
import Loading from '../../components/loading';

import './index.css';

export class SkillIntroItem extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired
  };

  handleClick(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    const { setFilters, tag } = this.props;
    setFilters({ skill: tag });
  }

  style() {
    const { thumbnail } = this.props;
    return {
      background: `url('/skills/${thumbnail}') no-repeat center 24px`,
      backgroundSize: '64px 64px'
    };
  }

  href() {
    const { tag } = this.props;
    return `/tasks/?skill=${encodeURIComponent(tag)}`;
  }

  render() {
    const { name, description } = this.props;
    return (
      <li className="skill-intro--item" style={this.style()}>
        <Link to={this.href()} onClick={evt => this.handleClick(evt)}>
          <h3>{name}</h3>
          <p>{description}</p>
        </Link>
      </li>
    );
  }
}

export default class SkillIntro extends Component {
  static propTypes = {
    skills: PropTypes.array
  };

  static defaultProps = {
    skills: []
  };

  renderHeader() {
    return <h2>Tasks by Skill</h2>;
  }

  renderLoading() {
    return (
      <section className="skill-intro project-skill--loading">
        {this.renderHeader()}
        <Loading className="blue" />
      </section>
    );
  }

  render() {
    const { skills, status } = this.props;
    const { ERROR, INIT, PENDING } = taskStatus;
    if ([PENDING, INIT].includes(status)) {
      return this.renderLoading();
    } else if (!skills.length || status === ERROR) {
      return null;
    }
    return (
      <section className="skill-intro">
        {this.renderHeader()}
        <ul>
          {skills.map(skill => <SkillIntroItem {...skill} />)}
        </ul>
      </section>
    );
  }
}
