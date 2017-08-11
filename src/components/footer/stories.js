import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { wrapper } from '../wrapper/decorator';

import Footer from './index';

storiesOf('Footer', module)
  .addDecorator(wrapper('dark'))
  .add('Footer', () => <Footer />);
