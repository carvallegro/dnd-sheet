import React, { Fragment } from 'react'
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'

import PrintSheet from './print-sheet'
import CharacterSheet from './character-sheet'

const App = () => (
  <Router>
    <Fragment>
      <Route path="/sheet" component={CharacterSheet} />
      <Route path="/print" component={PrintSheet} />
      {/*<Redirect from="/" to="sheet" strict />*/}
    </Fragment>
  </Router>
)

export default App
