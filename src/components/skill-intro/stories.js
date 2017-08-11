import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { skills } from '../../config.json';
import { wrapper } from '../wrapper/decorator';

import SkillIntro, { SkillIntroItem } from './index';

const stories = storiesOf('Tasks by skill', module)
  .addDecorator(wrapper('dark'))
  .add('Full list', () => <SkillIntro skills={skills} />)
  .add('No items', () => <SkillIntro skills={[]} />)
  .add('Only one item', () => <SkillIntro skills={skills.slice(0, 1)} />)
  .add('Only two items', () => <SkillIntro skills={skills.slice(0, 2)} />);

skills.forEach(skill => {
  stories.add(`Item: ${skill.name}`, () => <SkillIntroItem {...skill} />);
});
