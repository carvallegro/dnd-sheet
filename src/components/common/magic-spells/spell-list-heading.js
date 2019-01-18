import React from 'react'
import styled from 'styled-components'
import { fonts, fontSizes } from '@styles'

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
  margin: 0 0.4rem 0 0;
  font-family: ${fonts.display};
  font-size: 2.4rem;
  font-weight: bold;
`

const SpellLevelLabel = styled.p`
  margin: 0;
  font-family: ${fonts.display};
  font-size: ${fontSizes.small};
`

const SlotWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const SlotValue = styled.p`
  margin: 0;
  flex-grow: 1;
  font-family: ${fonts.input};
  font-size: 1.8rem;
  text-align: center;
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
    <SlotWrapper>
      <SlotValue>{slotTotal}</SlotValue>
      <SpellLevelLabel>Slots Total</SpellLevelLabel>
    </SlotWrapper>
    <SlotWrapper>
      <SlotValue>{slotExtended}</SlotValue>
      <SpellLevelLabel>Slots Extended</SpellLevelLabel>
    </SlotWrapper>
  </Wrapper>
)

export default SpellListHeading
