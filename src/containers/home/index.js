import React, { Component } from 'react';
import { connect } from 'react-redux';

import { filterActions } from '../../actions/filters';

import DocsIntro from '../../components/docs-intro';
import ProjectIntro from '../../components/project-intro';
import SkillIntro from '../../components/skill-intro';
import Intro from '../../components/intro';

import './index.css';

export class Home extends Component {
  static defaultProps = {
    repos: [],
    skills: []
  };

  getRepos() {
    const { repos } = this.props;
    return Object.keys(repos).map(slug => repos[slug]);
  }

  getSkills() {
    const { skills } = this.props;
    return Object.keys(skills).map(slug => skills[slug]);
  }

  render() {
    const { status, setFilters } = this.props;
    return (
      <section>
        <Intro />
        <DocsIntro />
        <ProjectIntro
          repos={this.getRepos()}
          status={status}
          setFilters={setFilters}
        />
        <SkillIntro
          skills={this.getSkills()}
          status={status}
          setFilters={setFilters}
        />
      </section>
    );
  }
}

const mapStateToProps = state => ({
  status: state.tasks.status,
  skills: state.tasks.skills,
  repos: state.tasks.repos
});

const mapDispatchToProps = dispatch => ({
  setFilters: opts => dispatch(filterActions.filterSet(opts))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
