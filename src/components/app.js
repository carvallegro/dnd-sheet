import React from 'react'
import { Route, Switch } from 'react-router-dom'

import routes from '../routes'

import PrintSheet from './print-sheet'
import CharacterSheet from './character-sheet'
import HomePage from './common/home-page'
import { globalHistory } from '../redux/store'
import { ConnectedRouter } from 'connected-react-router'

const App = () => (
  <ConnectedRouter history={globalHistory}>
    <Switch>
      <Route exact path={routes.homepage} component={HomePage} />
      <Route path={routes.character} component={CharacterSheet} />
      <Route path={routes.print} component={PrintSheet} />
    </Switch>
  </ConnectedRouter>
)

export default App
