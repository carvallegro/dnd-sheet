import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import Money from './index'

storiesOf('Money', module).add('default', () => (
  <Money name={text('Name', 'Strength')} value={text('value', '15')} />
))
