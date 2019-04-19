import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { math } from 'polished'
import { colors, fonts, fontSizes, SIZES } from '@styles'

const getTagTextColor = darkText => darkText ? colors.black : colors.white
const getTagBackgroundColor = ({ reverse, color }) => reverse ? 'transparent' : color

const getTagFontSize = ({ size }) => fontSizes[size]
const Tag = styled.div`
  display: flex;
  border: 1px solid ${({ color }) => color};
  background-color: ${getTagBackgroundColor};

  padding: ${({ size }) => math(`${fontSizes[size]}*0.05`)}
    ${({ size }) => math(`${fontSizes[size]}*0.5`)};

  font-family: ${fonts.input};
  font-size: ${getTagFontSize};
  text-align: center;
  color: ${({ reverse, color, darkText }) => (reverse ? color : getTagTextColor(darkText))};
  
  &:focus{
    outline: none;
  }
`

Tag.propTypes = {
  color: PropTypes.oneOf(Object.values(colors)),
  size: PropTypes.oneOf(Object.values(SIZES)),
  reverse: PropTypes.bool,
  darkText: PropTypes.bool
}
Tag.defaultProps = {
  color: colors.black,
  size: SIZES.xsmall,
  reverse: false,
  darkText: false
}
export default Tag
