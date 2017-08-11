import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { wrapper } from '../wrapper/decorator';

import Header, { HomeNav } from './index';

storiesOf('Header', module)
  .addDecorator(wrapper('dark'))
  .add('With no navigation', () => <Header />)
  .add('With homepage navigation', () => <Header><HomeNav /></Header>);
