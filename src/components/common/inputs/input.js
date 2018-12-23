import { InputField, InputWrapper } from './styles'
import Label from '../typography/label'
import PropTypes from 'prop-types'
import { sizes } from '../../../styles'
import React from 'react'

const Input = ({gridArea, label, type}) =>
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
