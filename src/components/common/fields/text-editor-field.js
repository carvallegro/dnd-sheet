import React from 'react'
import PropTypes from 'prop-types'
import { SIZES } from '@styles'

import Label from '../typography/label'

import { FieldWrapper } from './styles'
import TextEditor from '@common/text-editor'

// TODO: Choose
// - https://github.com/parsable/react-truncate-markup#readme
// - https://github.com/One-com/react-truncate

// - https://github.com/bevacqua/woofmark
// - https://github.com/developit/snarkdown

const TextEditorField = ({ align, gridArea, label, size, value, onChange }) => (
  <FieldWrapper gridArea={gridArea}>
    {label && (
      <Label align={align} size={size}>
        <b>{label}</b>
      </Label>
    )}
    <TextEditor initialValue={value} onSave={onChange} />
  </FieldWrapper>
)

TextEditorField.propStyle = {
  align: PropTypes.oneOf(['left', 'right']),
  gridArea: PropTypes.string,
  label: PropTypes.string.isRequired,
  size: PropTypes.oneOf(Object.values(SIZES))
}

TextEditorField.defaultStyle = {
  align: 'left',
  size: SIZES.medium
}

export default TextEditorField
