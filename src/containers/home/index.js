import React, { Component } from 'react';
import { connect } from 'react-redux';

import { filterActions } from '../../actions/filters';
import DocsIntro from '../../components/docs-intro';
import Header, { HomeNav } from '../../components/header';
import ProjectIntro from '../../components/project-intro';
import SkillIntro from '../../components/skill-intro';
import Intro from '../../components/intro';

import './index.css';

export class Home extends Component {
  render() {
    const {
      availableRepos,
      availableSkills,
      changeRepo,
      changeSkill,
      history
    } = this.props;
    return (
      <div className="home--view">
        <Header>
          <HomeNav />
        </Header>
        <main>
          <Intro />
          <DocsIntro />
          <ProjectIntro
            changeRepo={changeRepo}
            changeSkill={changeSkill}
            history={history}
            repos={availableRepos}
          />
          <SkillIntro
            changeRepo={changeRepo}
            changeSkill={changeSkill}
            history={history}
            skills={availableSkills}
          />
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  availableRepos: state.filters.available.repos,
  availableSkills: state.filters.available.skills
});

const mapDispatchToProps = dispatch => ({
  changeRepo: repo => dispatch(filterActions.changeRepoFilter(repo)),
  changeSkill: repo => dispatch(filterActions.changeSkillFilter(repo))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
