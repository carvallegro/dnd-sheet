// TODO: fix the router not firing on route change.
import React, { Fragment } from 'react'
import { ThemeProvider } from 'styled-components'
import { connect, Provider } from 'react-redux'

import { DISPLAY_MODE } from './components/common/layout'
import routes from './routes'
import store from './redux/store'
import GlobalStyle from './styles/global'
import { defaultTheme } from './styles/theme'

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
      }}
    >
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
