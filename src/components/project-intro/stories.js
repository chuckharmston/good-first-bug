import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { repos } from '../../config.json';
import { wrapper } from '../wrapper/decorator';

import ProjectIntro, { ProjectIntroItem } from './index';

const stories = storiesOf('Tasks by project', module)
  .addDecorator(wrapper('dark'))
  .add('Full list', () => <ProjectIntro repos={repos} />)
  .add('No items', () => <ProjectIntro repos={[]} />)
  .add('Only one item', () => <ProjectIntro repos={repos.slice(0, 1)} />)
  .add('Only two items', () => <ProjectIntro repos={repos.slice(0, 2)} />);

repos.forEach(repo => {
  stories.add(`Item: ${repo.name}`, () => <ProjectIntroItem {...repo} />);
});
