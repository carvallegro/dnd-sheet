import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import routes from '../routes'

import PrintSheet from './print-sheet'
import CharacterSheet from './character-sheet'
import HomePage from './common/home-page'

const App = () => (
  <Fragment>
    <Route path={routes.character} component={CharacterSheet} />
    <Route path={routes.print} component={PrintSheet} />
    <Route component={HomePage} />
  </Fragment>
)

export default App
