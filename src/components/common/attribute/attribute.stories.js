import React from 'react'
import { storiesOf } from '@storybook/react'
import Attribute from './index'

storiesOf('Attribute', module).add('default', () => (
  <Attribute name="Strength" value={15} modifier={3} />
))
