import React from 'react'
import styled from 'styled-components'

import GeneralPage from '../general-page'
import DescriptionPage from '../description-page'
import CombatPage from '../combat-page'
import { InventoryA, InventoryB } from '../inventory-page'
import { MagicA, MagicB, MagicC } from '../magic-page'

import { NotPrintableStyle } from '../../styles'

const Wrapper = styled.div`
  width: 900px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  grid-auto-rows: minmax(auto, 1fr);

  ${NotPrintableStyle}
`

const CharacterSheet = () => (
  <Wrapper>
    <GeneralPage id="general" />
    <DescriptionPage id="description" />
    <CombatPage id="combat" />
    <InventoryA id="inventorya" />
    <InventoryB id="inventoryb" />
    <MagicA id="magica" />
    <MagicB id="magicb" />
    <MagicC id="magicc" />
  </Wrapper>
)

export default CharacterSheet
