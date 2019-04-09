import React from 'react'
import PropTypes from 'prop-types'

import { SIZES } from '@styles'
import Label from '../typography/label'

import { Input, FieldWrapper, FakeInput } from './styles'

const InputField = ({
  gridArea,
  label,
  size,
  type,
  value,
  onChange,
  readOnly,
  editing,
  placeholder
}) => (
  <FieldWrapper gridArea={gridArea}>
    {editing ? (
      <Input
        type={type}
        size={size}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        readOnly={readOnly} />
    ) : (
      <FakeInput size={size}>
        {value || <i>&nbsp;</i>}
      </FakeInput>
    )}
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
  readOnly: PropTypes.bool,
  editing: PropTypes.bool
}

InputField.defaultProps = {
  type: 'string',
  size: SIZES.medium,
  readOnly: false,
  editing: false,
  onChange: e => {}
}

export default InputField
