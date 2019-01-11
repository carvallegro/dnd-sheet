import React from 'react'
import { ThemeProvider } from 'styled-components'
import { negativeTheme } from '../../styles/theme'
import Input from '../common/inputs/input'

import { Content, HeaderNav, Navigation, Wrapper } from './styles'

const Header = () => (
  <ThemeProvider theme={negativeTheme}>
    <Wrapper>
      <Content>
        <Input gridArea="characterName" label="Character Name" />
        <Navigation>
          <HeaderNav to="/sheet">General</HeaderNav>
          <HeaderNav to="/a">Description</HeaderNav>
          <HeaderNav to="/b">Combat</HeaderNav>
          <HeaderNav to="/c">Magic</HeaderNav>
          <HeaderNav to="/d">Inventory</HeaderNav>
        </Navigation>
      </Content>
    </Wrapper>
  </ThemeProvider>
)

export default Header
