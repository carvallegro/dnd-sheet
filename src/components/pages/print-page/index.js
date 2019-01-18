import React from 'react'

import GeneralSheet from './print-sheets/general-sheet/index'
import DescriptionSheet from './print-sheets/description-sheet/index'
import CombatSheet from './print-sheets/combat-sheet/index'
import { InventoryA, InventoryB } from './print-sheets/inventory-sheet/index'
import { MagicA, MagicB, MagicC } from './print-sheets/magic-sheet/index'

import { Book, BookWrapper } from './styles'

const PrintPage = () => (
  <BookWrapper>
    <Book>
      <GeneralSheet gridArea="general" />
      <DescriptionSheet gridArea="description" />
      <CombatSheet gridArea="combat" />
      <InventoryA gridArea="inventorya" />
      <InventoryB gridArea="inventoryb" />
      <MagicA gridArea="magica" />
      <MagicB gridArea="magicb" />
      <MagicC gridArea="magicc" />
    </Book>
  </BookWrapper>
)

export default PrintPage
