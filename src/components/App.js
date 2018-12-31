import React, { Fragment } from 'react'
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'
import { PrintBook } from './print-book'


const App = () => <Router>
  <Fragment>
    <Redirect from="/" to="print" />
    <Route path="/print" exact component={PrintBook} />
  </Fragment>
</Router>

export default App
