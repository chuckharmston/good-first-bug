import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { taskStatus } from '../../actions/tasks';
import { taskFactory } from '../../components/task/stories';
import { wrapper } from '../../components/wrapper/decorator';
import { repos, skills } from '../../config.json';
import { Tasks } from './index';

const stateFactory = (opts = {}) =>
  Object.assign(
    {
      filters: {
        repo: null,
        skill: null
      },
      repos: repos,
      skills: skills,
      status: taskStatus.COMPLETE,
      tasks: taskFactory(10)
    },
    opts
  );

storiesOf('Task listing page', module)
  .addDecorator(wrapper('dark'))
  .add('With 10 tasks', () => <Tasks {...stateFactory()} />)
  .add('With no tasks', () => (
    <Tasks
      {...stateFactory({
        tasks: []
      })}
    />
  ))
  .add('Error', () => (
    <Tasks
      {...stateFactory({
        status: taskStatus.ERROR
      })}
    />
  ))
  .add('While loading', () => (
    <Tasks
      {...stateFactory({
        status: taskStatus.PENDING
      })}
    />
  ));
