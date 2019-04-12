import React, { Fragment } from 'react'
import { ThemeProvider } from 'styled-components'
import { connect, Provider } from 'react-redux'

import { DISPLAY_MODE } from './components/layout'
import routes from './base-routes'
import store from './redux/store'
import GlobalStyle from './styles/global'
import { defaultTheme } from './styles/theme'
import { checkMissingItems, getStoredData } from './local-database'
import loadSrdData from './local-database/stub-data-load'
import { loadAllStoredData } from '@redux/data/actions'

const logger = v => {
  console.log(v)
  return v
}

checkMissingItems()
  .then(logger)
  .then(result => result.length > 0 ? loadSrdData() : undefined)
  .then(logger)
  .then(getStoredData)
  .then(logger)
  .then(data => store.dispatch(loadAllStoredData(data)))

const mapStateToProps = state => ({
  displayMode:
    state.router.location.pathname === routes.print
      ? DISPLAY_MODE.print
      : DISPLAY_MODE.web
})

const WithRouterWrapper = connect(mapStateToProps)(
  ({ children, displayMode }) => (
    <ThemeProvider
      theme={{
        ...defaultTheme,
        displayMode: displayMode
      }}>
      <Fragment>
        {children}
        <GlobalStyle />
      </Fragment>
    </ThemeProvider>
  )
)

const AppWrapper = ({ children }) => (
  <Provider store={store}>
    <WithRouterWrapper>{children}</WithRouterWrapper>
  </Provider>
)

export default AppWrapper
