import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { SIZES } from '../../../styles'
import Label from '../typography/label'

import { InputField, InputWrapper } from './styles'

const Wrapper = styled.div`
  flex-direction: row;
`

const Field = styled(InputField)`
  width: 2rem;
  padding: 0.2em 0.1em;
`

const InlineField = ({ gridArea, type, label }) => (
  <Wrapper gridArea={gridArea}>
    <Field type={type} />
    <Label>
      <b>{label}</b>
    </Label>
  </Wrapper>
)

InlineField.propStyle = {
  gridArea: PropTypes.string,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  size: PropTypes.oneOf(Object.values(SIZES))
}

InlineField.defaultStyle = {
  type: 'string',
  size: SIZES.medium
}

export default InlineField
