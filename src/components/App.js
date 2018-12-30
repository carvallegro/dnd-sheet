import React from 'react'
import styled from 'styled-components'
import { Page } from './common/layout'
import GeneralPage from './general-page'
import { InventoryA, InventoryB } from './inventory-page'
import DescriptionPage from './description-page'
import CombatPage from './combat-page'
import { MagicA, MagicB, MagicC } from './magic-page'

const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 4rem 10rem;
  overflow: auto;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`

const Book = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: auto auto;
  grid-template:
    'general description .' 1fr
    'combat . .' 1fr
    'magica magicb magicc' 1fr
    'inventorya inventoryb .' 1fr
    / 1fr 1fr 1fr;
`

const App = () => (
  <AppWrapper>
    <Book>
      <GeneralPage gridArea="general" />
      <DescriptionPage gridArea="description" />
      <CombatPage gridArea="combat" />
      <InventoryA gridArea="inventorya" />
      <InventoryB gridArea="inventoryb" />
      <MagicA gridArea="magica" />
      <MagicB gridArea="magicb" />
      <MagicC gridArea="magicc" />
    </Book>
  </AppWrapper>
)

export default App
