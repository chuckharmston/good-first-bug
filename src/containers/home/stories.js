import React from 'react';
import { storiesOf } from '@kadira/storybook';

import wrapper from '../../components/wrapper/decorator';
import { repos, skills } from '../../config';
import { Home } from './index';
import { taskStatus } from '../../actions/tasks';

const { COMPLETE, ERROR, PENDING } = taskStatus;

storiesOf('Home', module)
  .addDecorator(wrapper('blue'))
  .add('Loading', () => <Home status={PENDING} />)
  .add('Error (projects & skills should be empty)', () => (
    <Home status={ERROR} />
  ))
  .add('Loaded', () => (
    <Home status={COMPLETE} repos={repos} skills={skills} />
  ));
