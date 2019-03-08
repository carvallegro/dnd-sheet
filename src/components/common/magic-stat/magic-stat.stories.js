import React from 'react'
import { storiesOf } from '@storybook/react'
import { number, text } from '@storybook/addon-knobs'

import MagicStat from './index'

storiesOf('Magic Stat', module).add('default', () => (
  <MagicStat
    name={text('Name', 'Strength')}
    value={number('value', 15)}
    modifier={number('modifier', 3)}
  />
))
