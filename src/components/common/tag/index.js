import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors, fonts, fontSizes } from '@styles'

const TagWrapper = styled.span`
  background-color: ${({ color }) => color};
  font-family: ${fonts.input};
  font-size: ${fontSizes.xsmall};
  color: white;
  border-radius: 1rem;
  padding: 0.1rem 0.4rem;
`

const Tag = ({ color, children }) => (
  <TagWrapper color={color}>{children}</TagWrapper>
)

Tag.propTypes = {
  color: PropTypes.oneOf(Object.values(colors))
}

Tag.defaultProps = {
  color: colors.black
}
export default Tag
