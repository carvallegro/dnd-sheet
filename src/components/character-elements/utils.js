import React from 'react'
import { connect } from 'react-redux'

import InputField from '@common/fields/input-field'
import TextAreaField from '@common/fields/textarea-field'
import TextEditorField from '@common/fields/text-editor-field'

const connectTo = Component => (label, action, mapValue) =>
  connect(
    state => ({
      value: mapValue(state)
    }),
    dispatch => ({
      updateValue: name => dispatch(action(name))
    })
  )(props => (
    <Component
      label={label}
      value={props.value}
      onChange={props.updateValue}
      {...props}
    />
  ))

export const connectToInput = connectTo(InputField)

export const connectToTextArea = connectTo(TextAreaField)

export const connectToTextEditor = connectTo(TextEditorField)
