import React from 'react'
import { InputField, InputWrapper } from './styles'
import Label from '../typography/label'
import PropTypes from 'prop-types'
import { sizes } from '../../../styles'

const TextArea = ({align, gridArea, label}) =>
  <InputWrapper gridArea={gridArea}>
    <Label align={align}><b>{label}</b></Label>
    <textarea/>
  </InputWrapper>

TextArea.propStyle = {
  align: PropTypes.oneOf(['left', 'right']),
  gridArea: PropTypes.string,
  label: PropTypes.string.isRequired,
  size: PropTypes.oneOf(Object.values(sizes))
}

TextArea.defaultStyle = {
  align: 'left',
  size: sizes.medium
}

export default TextArea
