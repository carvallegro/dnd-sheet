import React from 'react'
import { Route, Switch } from 'react-router-dom'

import routes from '../routes'

import PrintPage from './print-page'
import CharacterSheet from './character-page'
import HomePage from './common/home-page'
import { globalHistory } from '../redux/store'
import { ConnectedRouter } from 'connected-react-router'

const App = () => (
  <ConnectedRouter history={globalHistory}>
    <Switch>
      <Route exact path={routes.homepage} component={HomePage} />
      <Route path={routes.character} component={CharacterSheet} />
      <Route path={routes.print} component={PrintPage} />
    </Switch>
  </ConnectedRouter>
)

export default App
