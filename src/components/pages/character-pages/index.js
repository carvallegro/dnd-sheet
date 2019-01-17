import React from 'react'
import { Redirect, Route, Switch, withRouter } from 'react-router-dom'

import AppTemplate from '../../app-template/index'

import characterRoutes from './character-routes'

import GeneralPage from './general-page'
import CombatPage from './combat-page'
import MagicPage from './magic-page'
import InventoryPage from './inventory-page'

const CharacterPage = ({ match }) => (
  <AppTemplate>
    <Switch>
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
      <Redirect exact strict to={`${match.url}${characterRoutes.general}`} />
    </Switch>
  </AppTemplate>
)

export default withRouter(CharacterPage)
