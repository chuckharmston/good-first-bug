import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { repos, skills } from '../../config.json';
import { wrapper } from '../../components/wrapper/decorator';
import { Home } from './index';

storiesOf('Homepage', module)
  .addDecorator(wrapper('dark'))
  .add('Loading projects and skills', () => <Home />)
  .add('No projects or skills', () => (
    <Home availableRepos={[]} availableSkills={[]} />
  ))
  .add('One project and skill', () => (
    <Home
      availableRepos={repos.slice(0, 1)}
      availableSkills={skills.slice(0, 1)}
    />
  ))
  .add('Two projects and skills', () => (
    <Home
      availableRepos={repos.slice(0, 2)}
      availableSkills={skills.slice(0, 2)}
    />
  ))
  .add('All projects and skills', () => (
    <Home availableRepos={repos} availableSkills={skills} />
  ));
