import React from 'react';
import { storiesOf } from '@kadira/storybook';

import Loading from './index';
import Wrapper from '../wrapper';

storiesOf('Loading', module)
  .add('On light', () => <Wrapper><Loading /></Wrapper>)
  .add('On dark', () => (
    <Wrapper extraClass="blue">
      <Loading className="blue" />
    </Wrapper>
  ));
