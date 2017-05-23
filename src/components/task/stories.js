import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { skills, repos } from '../../config.json';
import Task from './index';

const choice = array => {
  return array[Math.floor(Math.random() * array.length)];
};

export const taskProps = (overrides = {}) =>
  Object.assign(
    {},
    {
      id: 1,
      number: 123,
      url: 'https://github.com/mozilla/testpilot/tasks/1',
      title: 'Setup Sugardough Base',
      assignee: {
        login: 'lmorchard',
        html_url: 'https://github.com/lmorchard'
      },
      repo: repos[0],
      labels: skills[0]
    },
    overrides
  );

export const taskFactory = n =>
  [...Array(n).keys()].map(key =>
    taskProps({
      key: key,
      id: key,
      title: `This is task #${key + 1}`,
      repo: choice(repos),
      labels: choice(skills)
    })
  );

storiesOf('Task', module).add('default', () => <Task {...taskProps()} />);
