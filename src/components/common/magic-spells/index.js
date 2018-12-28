import React from 'react'
import styled from 'styled-components'
import { GridArea } from '../layout'
import Spell from './spell'
import SpellListHeading from './spell-list-heading'

const Wrapper = styled(GridArea)``

const MagicSpells = ({gridArea}) => <Wrapper gridArea={gridArea}>
  <SpellListHeading spellLevel={1} slotTotal={4} slotExtended={0}/>
  <Spell/>
  <Spell/>
  <Spell/>
  <Spell/>
</Wrapper>

export default MagicSpells
