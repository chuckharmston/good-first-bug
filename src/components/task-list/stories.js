import React from 'react';
import { storiesOf } from '@kadira/storybook';

import TaskList from './index';
import { taskFactory } from '../task/stories';
import { wrapper } from '../wrapper/decorator';

storiesOf('List of tasks', module)
  .addDecorator(wrapper('dark'))
  .add('No tasks', () => <TaskList tasks={[]} />)
  .add('Just one task', () => <TaskList tasks={taskFactory(1)} />)
  .add('Five tasks', () => <TaskList tasks={taskFactory(5)} />);
