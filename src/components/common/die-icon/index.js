import React from 'react'
import PropTypes from 'prop-types'

import { colors, fontSizes, SIZES } from '@styles/index'
import dice from '@enums/dice'

import { DieIconWrapper } from './styles'

import { ReactComponent as D4 } from './images/D4.svg'
import { ReactComponent as D6 } from './images/D6.svg'
import { ReactComponent as D8 } from './images/D8.svg'
import { ReactComponent as D10 } from './images/D10.svg'
import { ReactComponent as D12 } from './images/D12.svg'
import { ReactComponent as D20 } from './images/D20.svg'

const getImage = die => {
  switch (die) {
    case dice.D4:
      return <D4 />
    case dice.D6:
      return <D6 />
    case dice.D8:
      return <D8 />
    case dice.D10:
      return <D10 />
    case dice.D12:
      return <D12 />
    case dice.D20:
      return <D20 />
    default:
      return undefined
  }
}

const DieIcon = ({ die, size, color }) => (
  <DieIconWrapper size={size} color={color}>
    {getImage(die)}
  </DieIconWrapper>
)

DieIcon.propTypes = {
  die: PropTypes.oneOf(Object.values(dice)).isRequired,
  size: PropTypes.oneOf(Object.values(SIZES)),
  color: PropTypes.oneOf(Object.values(colors))
}

DieIcon.defaultProps = {
  color: colors.black,
  size: fontSizes.large
}

export default DieIcon
