import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import { negativeTheme } from '../../styles/theme'
import Input from '../common/inputs/input'

import { Content, HeaderNav, Navigation, Wrapper } from './styles'

const Header = ({isMenuOpen}) => (
  <ThemeProvider theme={negativeTheme}>
    <Wrapper isMenuOpen={isMenuOpen}>
      <Content>
        <Input gridArea="characterName" label="Character Name" />
        <Navigation>
          <HeaderNav to="/sheet">General</HeaderNav>
          <HeaderNav to="/a">Description</HeaderNav>
          <HeaderNav to="/b">Combat</HeaderNav>
          <HeaderNav to="/c">Magic</HeaderNav>
          <HeaderNav to="/d">Inventory</HeaderNav>
          <HeaderNav to="/print">Print</HeaderNav>
        </Navigation>
      </Content>
    </Wrapper>
  </ThemeProvider>
)

Header.propTypes = {
  isMenuOpen: PropTypes.bool
}

Header.defaultProps = {
  isMenuOpen: false
}

export default Header
