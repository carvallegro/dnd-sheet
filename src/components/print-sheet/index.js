import GeneralPage from '../general-page'
import DescriptionPage from '../description-page'
import CombatPage from '../combat-page'
import { InventoryA, InventoryB } from '../inventory-page'
import { MagicA, MagicB, MagicC } from '../magic-page'
import React from 'react'
import styled from 'styled-components'
import { media } from '../../styles'

const BookWrapper = styled.div`
  overflow: auto;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  
   ${media.print`
    width: initial;
    height: initial;
    padding: 0;
  `}  
`
const Book = styled.div`
  padding: 2rem 4rem;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: auto auto;
  grid-template:
    'general description .' 1fr
    'combat . .' 1fr
    'magica magicb magicc' 1fr
    'inventorya inventoryb .' 1fr
    / 1fr 1fr 1fr;
    
  ${media.print`
    &, & * {
      display: initial;
      visibility: visible;
    }
    & {
        left: 0px;
        top: 0px;
        position:absolute;
    }
  `}
`
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
