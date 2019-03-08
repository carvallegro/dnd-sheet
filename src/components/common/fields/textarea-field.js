import React from 'react'
import PropTypes from 'prop-types'
import { SIZES } from '@styles'

import Label from '../typography/label'

import { FieldWrapper, TextArea } from './styles'

const TextAreaField = ({ align, gridArea, label, size, value, onChange }) => (
  <FieldWrapper gridArea={gridArea}>
    {label && (
      <Label align={align} size={size}>
        <b>{label}</b>
      </Label>
    )}
    <TextArea value={value} onChange={onChange} />
  </FieldWrapper>
)

TextAreaField.propStyle = {
  align: PropTypes.oneOf(['left', 'right']),
  gridArea: PropTypes.string,
  label: PropTypes.string.isRequired,
  size: PropTypes.oneOf(Object.values(SIZES))
}

TextAreaField.defaultStyle = {
  align: 'left',
  size: SIZES.medium
}

export default TextAreaField
