import React, { Fragment } from 'react'
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'
import PrintSheet from './print-sheet'


const App = () => <Router>
  <Fragment>
    <Redirect from="/" to="print" />
    <Route path="/print" exact component={PrintSheet} />
  </Fragment>
</Router>

export default App
