import React from 'react'

import { storiesOf } from '@storybook/react'
import { text, withKnobs } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import TextEditor from './index'

storiesOf('Text Editor', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <TextEditor
      placeholder="Type a value"
      value={text('Input Value', 'I can do **Markdown** and I have a label!')}
      initialValue="I can do **Markdown** and I have a label!"
      onSave={action('editor-onSave')}
    />
  ))
