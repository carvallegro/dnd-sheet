import _ from 'lodash'
import React from 'react'
import styled from 'styled-components'
import { GridArea } from '../layout'
import Spell from './spell'
import SpellListHeading from './spell-list-heading'

const Wrapper = styled(GridArea)``

const TEST = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
const MagicSpells = ({ gridArea }) => (
  <Wrapper gridArea={gridArea}>
    <SpellListHeading spellLevel={1} slotTotal={4} slotExtended={0} />
    {TEST.map(v => (
      <Spell key={v} />
    ))}
  </Wrapper>
)

export default MagicSpells
