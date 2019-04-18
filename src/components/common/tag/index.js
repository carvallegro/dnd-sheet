import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { math } from 'polished'
import { colors, fonts, fontSizes, SIZES } from '@styles'

const Tag = styled.span`
  border-radius: 1rem;
  border: 1px solid ${({ color }) => color};
  background-color: ${({ reverse, color }) =>
    reverse ? 'transparent' : color};

  padding: ${({ size }) => math(`${fontSizes[size]}*0.05`)}
    ${({ size }) => math(`${fontSizes[size]}*0.6`)};

  font-family: ${fonts.input};
  font-size: ${({ size }) => fontSizes[size]};
  color: ${({ reverse, color }) => (reverse ? color : colors.white)};
`

Tag.propTypes = {
  color: PropTypes.oneOf(Object.values(colors)),
  size: PropTypes.oneOf(Object.values(SIZES)),
  reverse: PropTypes.bool
}
Tag.defaultProps = {
  color: colors.black,
  size: SIZES.xsmall,
  reverse: false
}
export default Tag
