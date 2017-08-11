import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { wrapper } from '../wrapper/decorator';

import Button from './index';

storiesOf('Button', module)
  .addDecorator(wrapper('dark'))
  .add('Button', () => <Button to="/foo" text="Find a Task" />);
