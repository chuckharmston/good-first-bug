import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { wrapper } from '../wrapper/decorator';

import Loading from './index';

storiesOf('Loading', module)
  .addDecorator(wrapper('dark'))
  .add('default', () => <Loading />);
