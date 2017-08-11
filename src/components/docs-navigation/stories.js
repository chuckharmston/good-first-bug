import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { docs } from '../../config.json';

import { wrapper } from '../wrapper/decorator';

import DocsNavigation from './index';

const factory = slug => <DocsNavigation currentPath={`/docs/${slug}/`} />;

const stories = storiesOf('Documentation navigation', module).addDecorator(
  wrapper('dark')
);
docs.forEach(doc => {
  stories.add(doc.title, () => factory(doc.slug));
});
