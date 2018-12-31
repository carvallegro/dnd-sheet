import React from 'react'

import CombatPage from '../combat-page'
import DescriptionPage from '../description-page'
import GeneralPage from '../general-page'
import { InventoryA, InventoryB } from '../inventory-page'
import { MagicA, MagicB, MagicC } from '../magic-page'

import { Book, BookWrapper } from './styles'

const PrintSheet = () => <BookWrapper>
  <Book>
    <GeneralPage gridArea="general"/>
    <DescriptionPage gridArea="description"/>
    <CombatPage gridArea="combat"/>
    <InventoryA gridArea="inventorya"/>
    <InventoryB gridArea="inventoryb"/>
    <MagicA gridArea="magica"/>
    <MagicB gridArea="magicb"/>
    <MagicC gridArea="magicc"/>
  </Book>
</BookWrapper>

export default PrintSheet
