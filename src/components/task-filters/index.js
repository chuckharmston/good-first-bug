import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './index.css';

class TaskFilter extends Component {
  static propTypes = {
    available: PropTypes.array,
    change: PropTypes.func.isRequired,
    current: PropTypes.string,
    getTitle: PropTypes.func.isRequired,
    getValue: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired
  };

  handleClick(evt) {
    evt.preventDefault();
    this.props.change(evt.target.dataset.value);
  }

  renderOptionStyle(thumbnail) {
    return {
      background: `url('${thumbnail}') no-repeat left`,
      backgroundSize: '24px 24px'
    };
  }

  renderOption(value, title, thumbnail) {
    const selected = value === this.props.current;
    return (
      <li key={value}>
        <a
          className={selected ? 'task-filters--current' : ''}
          href=""
          data-value={value}
          onClick={evt => this.handleClick(evt)}
          style={this.renderOptionStyle(thumbnail)}
        >
          {title}
        </a>
      </li>
    );
  }

  renderSelect() {
    const { available, title } = this.props;
    return (
      <section className="task-filters--select" key={title}>
        <h2>{title}</h2>
        <ul>
          {available &&
            available.map(item =>
              this.renderOption(
                this.props.getValue(item),
                this.props.getTitle(item),
                this.props.getThumbnail(item)
              )
            )}
        </ul>
      </section>
    );
  }

  render() {
    return this.props.available.length ? this.renderSelect() : null;
  }
}

export default class TaskFilters extends Component {
  static propTypes = {
    available: PropTypes.shape({
      repos: PropTypes.array,
      skills: PropTypes.array
    }).isRequired,
    changeRepo: PropTypes.func.isRequired,
    changeSkill: PropTypes.func.isRequired,
    repo: PropTypes.string,
    skill: PropTypes.string
  };

  handleReset(evt) {
    evt.preventDefault();
    const { changeRepo, changeSkill } = this.props;
    changeRepo(null);
    changeSkill(null);
  }

  renderBackButton() {
    return <Link to="/" className="task-filters--back">Back</Link>;
  }

  renderResetButton() {
    return (
      <button
        className="task-filters--reset"
        onClick={evt => this.handleReset(evt)}
      >
        Reset Filters
      </button>
    );
  }

  render() {
    const {
      available: { repos, skills },
      changeRepo,
      changeSkill,
      repo,
      skill
    } = this.props;
    return (
      <menu className="task-filters">
        {this.renderBackButton()}
        {this.renderResetButton()}
        <TaskFilter
          available={repos}
          change={changeRepo}
          current={repo}
          getTitle={repo => repo.name}
          getValue={repo => repo.repo}
          getThumbnail={repo => `/thumbnail/${repo.thumbnail}`}
          title="Project"
        />
        <TaskFilter
          available={skills}
          change={changeSkill}
          current={skill}
          getTitle={skill => skill.name}
          getValue={skill => skill.tag}
          getThumbnail={skill => `/skills/${skill.thumbnail}`}
          title="Skill"
        />
      </menu>
    );
  }
}
