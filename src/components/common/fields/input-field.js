import React from 'react'
import PropTypes from 'prop-types'

import { SIZES } from '@styles'
import Label from '../typography/label'

import { Input, FieldWrapper, FakeInput } from './styles'
import { InputWrapper } from '@common/fields/styles'

const InputField = ({
  gridArea,
  label,
  size,
  type,
  value,
  onChange,
  readOnly,
  editing,
  placeholder,
  before
}) => (
  <FieldWrapper gridArea={gridArea}>
    <InputWrapper editing={editing}>
      {before}
      {editing ? (
        <Input
          type={type}
          size={size}
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder={placeholder}
          readOnly={readOnly}
        />
      ) : (
        <FakeInput size={size}>{value || <i>&nbsp;</i>}</FakeInput>
      )}
    </InputWrapper>
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
  editing: PropTypes.bool,
  before: PropTypes.node
}

InputField.defaultProps = {
  type: 'string',
  size: SIZES.medium,
  readOnly: false,
  editing: false,
  onChange: e => {}
}

export default InputField
