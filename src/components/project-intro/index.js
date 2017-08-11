import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Loading from '../loading';

import './index.css';

export class ProjectIntroItem extends Component {
  static propTypes = {
    changeRepo: PropTypes.func.isRequired,
    changeSkill: PropTypes.func.isRequired,
    description: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  };

  thumbnailBg() {
    const { thumbnail } = this.props;
    return `url('/thumbnail/${thumbnail}') no-repeat 110px 30px`;
  }

  gradientBg() {
    const { colors } = this.props;
    return `#F2F2F2 linear-gradient(135deg, rgb(${colors[0]}), rgb(${colors[1]})) no-repeat`;
  }

  styles() {
    return {
      background: `${this.thumbnailBg()}, ${this.gradientBg()}`,
      backgroundSize: '80px 80px, 300px 140px'
    };
  }

  handleClick(evt) {
    evt.preventDefault();
    const { changeRepo, changeSkill, history, repo } = this.props;
    changeRepo(repo);
    changeSkill(null);
    history.push('/tasks');
    window.scroll(0, 0);
  }

  render() {
    const { description, name } = this.props;
    return (
      <li className="project-intro--item" style={this.styles()}>
        <a href="/tasks" onClick={evt => this.handleClick(evt)}>
          <header>
            <h3>{name}</h3>
            <p>{description}</p>
          </header>
          <button>See Tasks</button>
        </a>
      </li>
    );
  }
}

export default class ProjectIntro extends Component {
  static propTypes = {
    changeRepo: PropTypes.func.isRequired,
    changeSkill: PropTypes.func.isRequired,
    repos: PropTypes.array
  };

  static defaultProps = {
    repos: null
  };

  renderWrapper(elem) {
    return (
      <section id="project-intro" className="project-intro">
        <h2>Tasks by Project</h2>
        {elem}
      </section>
    );
  }

  renderLoading() {
    return this.renderWrapper(<Loading />);
  }

  render() {
    const { changeRepo, changeSkill, history, repos } = this.props;
    if (repos === null) {
      return this.renderLoading();
    } else if (!repos.length) {
      return null;
    }
    return this.renderWrapper(
      <ul>
        {repos.map((repo, index) => (
          <ProjectIntroItem
            changeRepo={changeRepo}
            changeSkill={changeSkill}
            history={history}
            key={index}
            {...repo}
          />
        ))}
      </ul>
    );
  }
}
