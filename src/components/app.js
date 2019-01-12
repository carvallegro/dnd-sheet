import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'

import { globalHistory } from '../redux/store'
import routes from '../routes'

import PrintPage from './print-page'
import CharacterPage from './character-page'

const App = () =>
  <ConnectedRouter history={globalHistory}>
    <Switch>
      <Route exact path={routes.homepage} component={CharacterPage}/>
      <Route path={routes.character} component={CharacterPage}/>
      <Route path={routes.print} component={PrintPage}/>
    </Switch>
  </ConnectedRouter>

export default App
