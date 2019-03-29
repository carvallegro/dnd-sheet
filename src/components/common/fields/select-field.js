import React from 'react'
import { FieldWrapper, SelectInput } from '@common/fields/styles'
import Label from '@common/fields/input-field'
import { DottedBorderWrapper } from '@components/common/fields/styles'
import InputField from '@common/fields/input-field'

import { Icon } from 'react-icons-kit'
import {chevronDown} from 'react-icons-kit/feather/chevronDown'

const SelectField = ({
  gridArea,
  label,
  size,
  type,
  value,
  onChange,
  placeholder,
  readonly
}) => (
  <FieldWrapper gridArea={gridArea}>
    <DottedBorderWrapper>
      <SelectInput
        type={type}
        size={size}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        readonly={readonly}
      />
      <Icon icon={chevronDown} />
    </DottedBorderWrapper>
    {label && <Label size={size}>{label}</Label>}
  </FieldWrapper>
)

SelectField.propTypes = InputField.propStyle

export default SelectField
