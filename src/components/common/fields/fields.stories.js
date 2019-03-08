import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'
import { SIZES } from '@styles'

import Checkbox from './checkbox'
import InlineField from './inline'
import InputField from './input-field'
import TextEditor from './text-editor-field'
import TextAreaField from './/textarea-field'

storiesOf('Inputs/checkbox', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Checkbox
      name="default_checkbox"
      onChange={action('checkbox-onchange')}
      checked={boolean('Checked')}
      size={select('Size', SIZES, SIZES.medium)}
    />
  ))

storiesOf('Inputs/Inline Field', module)
  .addDecorator(withKnobs)
  .add('default', () => <InlineField label="Field Label" type="text" />)

storiesOf('Inputs/Input Field', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <InputField
      label="Input Field Label"
      placeholder="Type a value"
      value={text('Input Value')}
      onChange={action('input-onchange')}
      size={select('Size', SIZES, SIZES.medium)}
    />
  ))

storiesOf('Inputs/Text Editor Field', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <TextEditor
      label="Text Editor with a label on top"
      placeholder="Type a value"
      value={text('Input Value', 'I can do **Markdown** and I have a label!')}
      onChange={action('editor-onchange')}
    />
  ))

storiesOf('Inputs/Textarea', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <TextAreaField
      label="Textarea"
      placeholder="Type a value"
      value={text('TextArea Value', 'I cannot do **Markdown** :(')}
      onChange={action('textarea-onchange')}
    />
  ))
