import styled from 'styled-components'
import PropTypes from 'prop-types'
import { DottedBorderStyle, fonts, fontSizes, sizes } from '../../../styles'
import { GridArea } from '../layout'

export const InputField = styled.input`
  width: auto;
  border: none;
  margin: 0;
  padding: 0.4em 0.2em;
  ${DottedBorderStyle}
  
  font-family: ${fonts.input};
  font-size: calc(1pt + ${({size}) => fontSizes[size]});
  
  &:active, &:focus{
    outline: none;
  }
`

InputField.propTypes = {
  size: PropTypes.oneOf(Object.values(sizes))
}
InputField.defaultProps = {
  size: sizes.medium
}

export const InputWrapper = styled(GridArea)`
  display: flex;
  flex-direction: column; 
  width: 100%;
`
