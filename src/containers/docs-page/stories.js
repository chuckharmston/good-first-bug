import React, { createElement } from 'react';
import { storiesOf } from '@kadira/storybook';

import { docs } from '../../config.json';
import { wrapper } from '../../components/wrapper/decorator';

const stories = storiesOf('Documentation page', module).addDecorator(
  wrapper('dark')
);
docs.forEach(doc => {
  const Component = require(`./content/${doc.slug}`).default;
  stories.add(doc.title, () =>
    createElement(
      Component,
      {
        match: {
          path: `/docs/${doc.slug}/`
        }
      },
      null
    )
  );
});
