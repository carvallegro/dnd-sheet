import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Label from '../typography/label'
import { fonts, sizes } from '../../../styles'

import { InputWrapper } from './styles'

const TextArea = styled.textarea`
  width: 100%;
  height: 100%;

  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 1px;

  font-family: ${fonts.input};
  font-size: 1rem;
  line-height: 1.25;

  resize: none;

  &:focus {
    outline: none;
    border-color: rgba(0, 0, 0, 1);
  }
`

const TextAreaField = ({ align, gridArea, label }) => (
  <InputWrapper gridArea={gridArea}>
    <Label align={align}>
      <b>{label}</b>
    </Label>
    <TextArea />
  </InputWrapper>
)

TextAreaField.propStyle = {
  align: PropTypes.oneOf(['left', 'right']),
  gridArea: PropTypes.string,
  label: PropTypes.string.isRequired,
  size: PropTypes.oneOf(Object.values(sizes))
}

TextAreaField.defaultStyle = {
  align: 'left',
  size: sizes.medium
}

export default TextAreaField
