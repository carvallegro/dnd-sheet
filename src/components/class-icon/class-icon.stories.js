import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, withKnobs, select } from '@storybook/addon-knobs'
import classes from '../../enums/classes'

import ClassIcon from './index'
import { colors } from '@styles'

storiesOf('ClassIcon', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <ClassIcon
      classEnum={select('Class Enum', classes, classes.BARD)}
      color={select('Color', colors, colors.black)}
      height={text('Height', '200px')}
    />
  ))
