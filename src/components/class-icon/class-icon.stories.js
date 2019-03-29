import React from 'react'
import { storiesOf } from '@storybook/react'
import { select, withKnobs } from '@storybook/addon-knobs'
import classes from '../../enums/classes'

import ClassIcon from './index'

storiesOf('ClassIcon', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <ClassIcon classEnum={select('Class Enum', classes, classes.BARD)} />
  ))
