import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Loading from '../loading';

import './index.css';

export class SkillIntroItem extends Component {
  static propTypes = {
    changeSkill: PropTypes.func.isRequired,
    changeRepo: PropTypes.func.isRequired,
    description: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired
  };

  styles() {
    const { thumbnail } = this.props;
    return {
      background: `url('/skills/${thumbnail}') no-repeat center 64px`,
      backgroundSize: '112px 112px'
    };
  }

  handleClick(evt) {
    evt.preventDefault();
    const { changeSkill, changeRepo, history, tag } = this.props;
    changeSkill(tag);
    changeRepo(null);
    history.push('/tasks');
    window.scroll(0, 0);
  }

  render() {
    const { name, description } = this.props;
    return (
      <li className="skill-intro--item" style={this.styles()}>
        <a href="/tasks" onClick={evt => this.handleClick(evt)}>
          <h3>{name}</h3>
          <p>{description}</p>
        </a>
      </li>
    );
  }
}

export default class SkillIntro extends Component {
  static propTypes = {
    changeSkill: PropTypes.func.isRequired,
    changeRepo: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    skills: PropTypes.array
  };

  static defaultProps = {
    skills: null
  };

  renderWrapper(elem) {
    return (
      <section id="skill-intro" className="skill-intro">
        <h2>Tasks by Skill</h2>
        {elem}
      </section>
    );
  }

  renderLoading() {
    return this.renderWrapper(<Loading />);
  }

  render() {
    const { changeRepo, changeSkill, history, skills } = this.props;
    if (skills === null) {
      return this.renderLoading();
    } else if (!skills.length) {
      return null;
    }
    return this.renderWrapper(
      <ul>
        {skills.map((skill, index) => (
          <SkillIntroItem
            changeSkill={changeSkill}
            changeRepo={changeRepo}
            history={history}
            key={index}
            {...skill}
          />
        ))}
      </ul>
    );
  }
}
