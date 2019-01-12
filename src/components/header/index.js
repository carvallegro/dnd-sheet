import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { negativeTheme } from '@styles/theme'
import Input from '@common/inputs/input'

import characterRoutes from '../pages/character-pages/character-routes'

import { Content, HeaderNav, Navigation, Wrapper } from './styles'

const Header = ({isMenuOpen, match}) => (
  <ThemeProvider theme={negativeTheme}>
    <Wrapper isMenuOpen={isMenuOpen}>
      <Content>
        <Input gridArea="characterName" label="Character Name" />
        <Navigation>
          <HeaderNav to={`${match.url}${characterRoutes.general}`}>General</HeaderNav>
          <HeaderNav to={`${match.url}${characterRoutes.combat}`}>Combat</HeaderNav>
          <HeaderNav to={`${match.url}${characterRoutes.magic}`}>Magic</HeaderNav>
          <HeaderNav to={`${match.url}${characterRoutes.inventory}`}>Inventory</HeaderNav>
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

export default withRouter(Header)
