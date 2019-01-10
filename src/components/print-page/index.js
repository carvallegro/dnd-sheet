import React from 'react'

import GeneralSheet from '../print-sheets/general-sheet'
import DescriptionSheet from '../print-sheets/description-sheet'
import CombatSheet from '../print-sheets/combat-sheet'
import { InventoryA, InventoryB } from '../print-sheets/inventory-sheet'
import { MagicA, MagicB, MagicC } from '../print-sheets/magic-sheet'

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
