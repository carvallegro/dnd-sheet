import styled from 'styled-components'
import PropTypes from 'prop-types'
import { DottedBorderStyle, fonts, fontSizes, SIZES } from '../../../styles'
import { GridArea } from '../layout'

export const InputField = styled.input`
  width: 100%;
  border: none;
  margin: 0;
  padding: 0.4em 0.2em;

  font-family: ${fonts.input};
  font-size: calc(1pt + ${({ size }) => fontSizes[size]});
  ${DottedBorderStyle}

  &:active, &:focus {
    outline: none;
  }
`

InputField.propTypes = {
  size: PropTypes.oneOf(Object.values(SIZES))
}
InputField.defaultProps = {
  size: SIZES.medium
}

export const InputWrapper = styled(GridArea)`
  display: flex;
  flex-direction: column;
  max-width: 100%;
`
