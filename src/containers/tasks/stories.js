import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { taskStatus } from '../../actions/tasks';
import { taskFactory } from '../../components/task/stories';
import wrapper from '../../components/wrapper/decorator';
import { Tasks } from './index';

const { COMPLETE, ERROR, PENDING } = taskStatus;

storiesOf('Tasks', module)
  .addDecorator(wrapper('blue'))
  .add('Loading', () => <Tasks status={PENDING} tasks={[]} />)
  .add('Error', () => <Tasks status={ERROR} tasks={[]} />)
  .add('No tasks', () => <Tasks status={COMPLETE} tasks={[]} />)
  .add('1 task', () => <Tasks status={COMPLETE} tasks={taskFactory(1)} />)
  .add('10 tasks', () => <Tasks status={COMPLETE} tasks={taskFactory(10)} />);
