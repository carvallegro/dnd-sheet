import styled from 'styled-components'

export const Heading = styled.div`
  grid-area: heading;

  display: grid;
  grid-column-gap: 2rem;
  grid-template:
    'pageTitle pageTitle spellcastingClass spellcastingClass spellSaveAC spellAttackBonus' 4.2rem
    'characterName characterName spellcastingAbility spellcastingAbility spellSaveAC spellAttackBonus' 3.2rem
    / 1fr 1fr 2fr 1fr 1fr 1fr;
`
