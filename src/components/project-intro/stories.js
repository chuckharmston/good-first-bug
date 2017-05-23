import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { repos } from '../../config.json';
import wrapper from '../wrapper/decorator';
import ProjectIntro, { ProjectIntroItem } from './index';
import { taskStatus } from '../../actions/tasks';

const { COMPLETE, ERROR, PENDING } = taskStatus;

const itemStories = storiesOf('Project Intro Items', module).addDecorator(
  wrapper('blue')
);
repos.forEach(repo => {
  itemStories.add(repo.name, () => <ProjectIntroItem {...repo} />);
});

const stories = storiesOf('Project Intro', module)
  .addDecorator(wrapper('blue'))
  .add('Loading', () => <ProjectIntro status={PENDING} />)
  .add('Error (should be blank)', () => <ProjectIntro status={ERROR} />)
  .add('No projects (should be blank)', () => (
    <ProjectIntro status={COMPLETE} repos={[]} />
  ))
  .add('default', () => <ProjectIntro repos={repos} />);
