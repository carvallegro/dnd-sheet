import React, { Fragment } from 'react'
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'

import PrintSheet from './print-sheet'
import CharacterSheet from './character-sheet'
import HomePage from './common/home-page'

const App = () => (
  <Router basename='/dnd-sheet'>
    <Fragment>
      <Route path="/" exact component={HomePage} />
      <Route path="/sheet" component={CharacterSheet} />
      <Route path="/print" component={PrintSheet} />
    </Fragment>
  </Router>
)

export default App
