import React from 'react'
import styled from 'styled-components'

import { storiesOf } from '@storybook/react'
import { withKnobs, text, number } from '@storybook/addon-knobs'

import DeathSavesCheckboxes from './index'

const Wrapper = styled.div`
  width: 100px;
`

storiesOf('Death Saves Checkboxes', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Wrapper>
      <DeathSavesCheckboxes
        label={text('Label', 'LABEL')}
        name="life-save"
        value={number('Value', 0)}
        maxThrows={number('Number of Throws', 3)}
      />
    </Wrapper>
  ))
  .add('Life Saves', () => (
    <Wrapper>
      <DeathSavesCheckboxes label="Life saves" name="life-save" />
    </Wrapper>
  ))
  .add('Death Saves', () => (
    <Wrapper>
      <DeathSavesCheckboxes label="Death saves" name="death-save" reversed />
    </Wrapper>
  ))
