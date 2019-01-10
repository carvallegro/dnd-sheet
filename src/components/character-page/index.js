import React, { Fragment } from 'react'
import styled from 'styled-components'

import GeneralSheet from '../print-sheets/general-sheet'
import DescriptionSheet from '../print-sheets/description-sheet'
import CombatSheet from '../print-sheets/combat-sheet'
import { InventoryA, InventoryB } from '../print-sheets/inventory-sheet'
import { MagicA, MagicB, MagicC } from '../print-sheets/magic-sheet'

import { NotPrintableStyle } from '../../styles'
import Header from '../header'
import Menu from '../menu'

const Wrapper = styled.div`
  position:relative;
  width: 900px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  grid-auto-rows: 1200px;

  ${NotPrintableStyle}
`

const CharacterSheet = () => (
  <Fragment>
    <Header/>
    <Wrapper>
      <GeneralSheet id="general"/>
      <DescriptionSheet id="description"/>
      <CombatSheet id="combat"/>
      <InventoryA id="inventorya"/>
      <InventoryB id="inventoryb"/>
      <MagicA id="magica"/>
      <MagicB id="magicb"/>
      <MagicC id="magicc"/>
      <Menu/>
    </Wrapper>
  </Fragment>
)

export default CharacterSheet
