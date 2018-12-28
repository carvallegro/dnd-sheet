import React from 'react'
import styled from 'styled-components'
import Checkbox from '../inputs/checkbox'
import { InputField } from '../inputs/styles'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

const Spell = () => <Wrapper>
  <Checkbox name='spell-a'/>
  <InputField/>
</Wrapper>

export default Spell
