import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'

import { globalHistory } from '../redux/store'
import routes from '../base-routes'

import PrintPage from './pages/print-page'
import CharacterPage from './pages/character-pages'

const NotFound = () => <h1>Not found</h1>
const App = () => (
  <ConnectedRouter history={globalHistory}>
    <Switch>
      {/*<Route path={routes.basepage} component={CharacterPage}/>*/}
      <Route path={routes.character} component={CharacterPage} />
      <Route exact path={routes.print} component={PrintPage} />
      <Redirect exact strict from="/" to="/character" />
      <Route component={NotFound} />
    </Switch>
  </ConnectedRouter>
)

export default App
