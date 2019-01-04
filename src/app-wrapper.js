// TODO: fix the router not firing on route change.
import React, { Fragment } from 'react'
import { ThemeProvider } from 'styled-components'
import { connect, Provider } from 'react-redux'

import { DISPLAY_MODE } from './components/common/layout'
import routes from './routes'
import store from './redux/store'
import GlobalStyle from './styles/global'

const mapStateToProps = state => ({
  pathname: state.router.location.pathname
})

const WithRouterWrapper = connect(mapStateToProps)(({ children, pathname }) => (
  <ThemeProvider
    theme={{
      displayMode:
        pathname === routes.print ? DISPLAY_MODE.print : DISPLAY_MODE.web
    }}
  >
    <Fragment>
      {children}
      <GlobalStyle />
    </Fragment>
  </ThemeProvider>
))

const AppWrapper = ({ children }) => (
  <Provider store={store}>
    <WithRouterWrapper>{children}</WithRouterWrapper>
  </Provider>
)

export default AppWrapper
