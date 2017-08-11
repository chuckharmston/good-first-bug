import React from 'react';
import { addDecorator, storiesOf } from '@kadira/storybook';

import { docs } from '../../config.json';
import { wrapper } from '../wrapper/decorator';

import DocsIntro, { DocsIntroLink } from './index';

const stories = storiesOf('Documentation intro', module)
  .addDecorator(wrapper('dark'))
  .add('Full section', () => <DocsIntro />);

docs.forEach(doc => {
  stories.add(`Item: ${doc.title}`, () => <DocsIntroLink {...doc} />);
});
