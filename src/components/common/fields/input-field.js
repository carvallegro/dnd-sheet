import React from 'react'
import PropTypes from 'prop-types'

import { SIZES } from '@styles'
import Label from '../typography/label'

import { Input, FieldWrapper } from './styles'

const InputField = ({
  gridArea,
  label,
  size,
  type,
  value,
  onChange,
  readonly,
  placeholder
}) => (
  <FieldWrapper gridArea={gridArea}>
    <Input
      type={type}
      size={size}
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      readonly={readonly}
    />
    {label && <Label size={size}>{label}</Label>}
  </FieldWrapper>
)

InputField.propStyle = {
  gridArea: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.oneOf(Object.values(SIZES)),
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.func,
  readonly: PropTypes.bool
}

InputField.defaultProps = {
  type: 'string',
  size: SIZES.medium,
  readonly: false,
  onChange: e => {}
}

export default InputField
