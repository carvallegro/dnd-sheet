import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'

import { globalHistory } from '../redux/store'
import routes from '../base-routes'

import PrintPage from './pages/print-page'
import CharacterPage from './pages/character-pages'

const App = () => (
  <ConnectedRouter history={globalHistory}>
    <Switch>
      <Route exact path={routes.basepage} component={CharacterPage} />
      <Route path={routes.character} component={CharacterPage} />
      <Route path={routes.print} component={PrintPage} />
    </Switch>
  </ConnectedRouter>
)

export default App
