import React from 'react'
import styled from 'styled-components'
import Checkbox from '../inputs/checkbox'
import { InputField } from '../inputs/styles'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

const SpellNameField = styled(InputField)`
  margin-left: 0.6rem;
`

const Spell = () => (
  <Wrapper>
    <Checkbox name="spell-a" />
    <SpellNameField size="small" />
  </Wrapper>
)

export default Spell
