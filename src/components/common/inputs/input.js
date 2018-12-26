import React from 'react'
import PropTypes from 'prop-types'

import Label from '../typography/label'
import { sizes } from '../../../styles'

import { InputField, InputWrapper } from './styles'

const Input = ({ gridArea, label, size, type }) => (
  <InputWrapper gridArea={gridArea}>
    <InputField type={type} size={size} />
    <Label size={size}>{label}</Label>
  </InputWrapper>
)

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
