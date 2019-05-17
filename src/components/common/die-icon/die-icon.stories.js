import React from 'react'
import { storiesOf } from '@storybook/react'
import { select, withKnobs } from '@storybook/addon-knobs'

import { colors, SIZES } from '@styles'
import { dice } from '@enums/dice'

import DieIcon from '@common/die-icon'

storiesOf('DieIcon', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <DieIcon
      die={select('Dice', dice, dice.D4)}
      color={select('Color', colors, colors.black)}
      size={select('Size', SIZES, SIZES.medium)}
    />
  ))

