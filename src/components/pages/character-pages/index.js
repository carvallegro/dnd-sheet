import React from 'react'
import { Route, withRouter } from 'react-router-dom'
import Card from '@common/card'

import AppTemplate from '../../app-template/index'

import characterRoutes from './character-routes'

import GeneralPage from './general-page'
import CombatPage from './combat-page'
import MagicPage from './magic-page'
import InventoryPage from './inventory-page'

const CharacterPage = ({ match }) => (
  <AppTemplate>
    <Route
      path={`${match.url}${characterRoutes.general}`}
      component={GeneralPage}
    />
    <Route
      path={`${match.url}${characterRoutes.combat}`}
      component={CombatPage}
    />
    <Route
      path={`${match.url}${characterRoutes.magic}`}
      component={MagicPage}
    />
    <Route
      path={`${match.url}${characterRoutes.inventory}`}
      component={InventoryPage}
    />
  </AppTemplate>
)

export default withRouter(CharacterPage)
