import React from 'react'
import styled from 'styled-components'
import { fonts, fontSizes } from '../../../styles'

const Wrapper = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
`

const SpellLevel = styled.div`
  display: flex;
  align-items: center;
`

const SpellLevelValue = styled.h3`
  margin: 0;
  font-family: ${fonts.display};
  font-size: 2rem;
  font-weight: bold;
`

const SpellLevelLabel = styled.p`
  margin: 0;
  font-family: ${fonts.display};
  font-size: ${fontSizes.small};
`

const SpellListHeading = ({ spellLevel, slotTotal, slotExtended }) => (
  <Wrapper>
    <SpellLevel>
      <SpellLevelValue>{spellLevel}</SpellLevelValue>
      <SpellLevelLabel>
        Spell
        <br />
        Level
      </SpellLevelLabel>
    </SpellLevel>
    <p>{slotTotal}</p>
    <p>{slotExtended}</p>
  </Wrapper>
)

export default SpellListHeading
