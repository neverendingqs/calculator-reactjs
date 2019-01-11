import React from 'react';

import Display from '../containers/Display'
import Keypad from '../containers/Keypad';

export default () =>
  <div className="text-center">
    <Display />
    <hr />
    <Keypad />
  </div>;
