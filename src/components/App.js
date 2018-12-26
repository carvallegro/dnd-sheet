import React from 'react'
import styled from 'styled-components'
import { Page } from './common/layout'
import DescriptionPage from './descriptionPage'

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
      <DescriptionPage />
      <Page />
      <Page />
      <Page />
    </Book>
  </AppWrapper>
)

export default App
