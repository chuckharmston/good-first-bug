import React from 'react';
import { storiesOf } from '@kadira/storybook';

import LabelList, { Label } from './index';
import { repos } from '../../config.json';
import { wrapper } from '../wrapper/decorator';

export const labelProps = (overrides = {}) =>
  Object.assign(
    {},
    {
      id: 1,
      name: 'Label'
    },
    overrides
  );

export const labelFactory = n =>
  [...Array(n).keys()].map(key =>
    labelProps({
      key: key,
      id: key,
      name: `label-${key + 1}`
    })
  );

storiesOf('Labels', module)
  .addDecorator(wrapper('dark'))
  .add('List with no labels', () => <LabelList />)
  .add('List with only a project', () => <LabelList repo={repos[0]} />)
  .add('List with only skills', () => <LabelList labels={labelFactory(2)} />)
  .add('List with a project and skills', () => (
    <LabelList repo={repos[0]} labels={labelFactory(2)} />
  ))
  .add('Project label', () => <Label className="project" name="Test Pilot" />)
  .add('Skill label', () => <Label className="skill" name="CSS" />);
