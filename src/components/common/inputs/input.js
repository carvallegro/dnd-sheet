import React from 'react'
import PropTypes from 'prop-types'

import { SIZES } from '@styles'
import Label from '../typography/label'

import { InputField, InputWrapper } from './styles'

const Input = ({
  gridArea,
  label,
  size,
  type,
  value,
  onChange,
  placeholder
}) => (
  <InputWrapper gridArea={gridArea}>
    <InputField
      type={type}
      size={size}
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
    />
    <Label size={size}>{label}</Label>
  </InputWrapper>
)

Input.propStyle = {
  gridArea: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.oneOf(Object.values(SIZES)),
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.func
}

Input.defaultStyle = {
  type: 'string',
  size: SIZES.medium,
  onChange: () => {}
}

export default Input
