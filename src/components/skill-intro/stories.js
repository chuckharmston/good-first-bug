import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { skills } from '../../config.json';
import wrapper from '../wrapper/decorator';
import SkillIntro, { SkillIntroItem } from './index';
import { taskStatus } from '../../actions/tasks';

const { COMPLETE, ERROR, PENDING } = taskStatus;

const itemStories = storiesOf('Skill Intro Items', module).addDecorator(
  wrapper('blue')
);
skills.forEach(skill => {
  itemStories.add(skill.name, () => <SkillIntroItem {...skill} />);
});

const stories = storiesOf('Skill Intro', module)
  .addDecorator(wrapper('blue'))
  .add('Loading', () => <SkillIntro status={PENDING} />)
  .add('Error (should be blank)', () => <SkillIntro status={ERROR} />)
  .add('No skills (should be blank)', () => (
    <SkillIntro status={COMPLETE} skills={[]} />
  ))
  .add('All skills', () => <SkillIntro skills={skills} />);
