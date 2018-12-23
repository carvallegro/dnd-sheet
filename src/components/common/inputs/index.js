import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { fonts, fontSizes, sizes } from '../../../styles'
import Label from '../typography/label'
import PageHeading from '../typography'

const InputField = styled.input`
  border: none;
  margin: 0;
  padding: 0.4em 0.2em;
  background: linear-gradient(to right, black 33%, rgba(255,255,255,20) 0%) repeat-x bottom;
  background-size: 6px 2px;
  
  font-family: ${fonts.input};
  font-size: calc(1pt + ${({size}) => fontSizes.point[size]});
  
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

const InputWrapper = styled.div`
  ${
  ({gridArea}) => gridArea &&
    `grid-area: ${gridArea};`
  }
  display: flex;
  flex-direction: column; 
`

InputWrapper.propStyle = {
  gridArea: PropTypes.string
}

export const Input = ({gridArea, label, type}) =>
  <InputWrapper gridArea={gridArea}>
    <InputField type={type}/>
    <Label>{label}</Label>
  </InputWrapper>

Input.propStyle = {
  gridArea: PropTypes.string,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  size: PropTypes.oneOf(Object.values(sizes))
}

Input.defaultStyle = {
  type: 'string',
  size: sizes.medium
}

export default Input
