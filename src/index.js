import React from 'react'
import ReactDOM from 'react-dom'

import * as serviceWorker from './serviceWorker'
import AppWrapper from './app-wrapper'

import App from './components/app'
import { checkMissingItems } from './local-database'
import loadSrdData from './local-database/stub-data-load'

checkMissingItems().then(result => {
  if (result.length > 0) {
    return loadSrdData
  }
})

ReactDOM.render(
  <AppWrapper>
    <App />
  </AppWrapper>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
