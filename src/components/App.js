import React from 'react'
import styled from 'styled-components'
import { Page } from './common/layout'
import GeneralPage from './general-page'
import { InventoryA, InventoryB } from './inventory-page'
import DescriptionPage from './description-page'

const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Book = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: auto auto;
`

const App = () => (
  <AppWrapper>
    <Book>
      <GeneralPage />
      <DescriptionPage />
      <InventoryA />
      <InventoryB />
    </Book>
  </AppWrapper>
)

export default App