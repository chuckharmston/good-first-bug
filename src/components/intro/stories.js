import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { wrapper } from '../wrapper/decorator';

import Intro from './index';

storiesOf('Introduction', module)
  .addDecorator(wrapper('dark'))
  .add('Introduction', () => <Intro />);
