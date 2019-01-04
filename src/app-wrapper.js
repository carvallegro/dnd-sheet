// TODO: fix the router not firing on route change.
import React, { Fragment } from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { connect, Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'

import { DISPLAY_MODE } from './components/common/layout'
import { colors, media } from './styles'
import routes from './routes'
import store, { globalHistory } from './redux/store'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lora:400,400i,700,700i|Work+Sans');

  html{
    font-size: ${({ theme }) =>
      DISPLAY_MODE.print == theme.displayMode ? '10pt' : '16px'};
    box-sizing: border-box;
  }

  body {
    margin: 0;
    color: ${colors.black};
  }

  ${media.print`
    html {
      font-size: 10pt;
      width: 159mm;
    }
  `}
`

export const AppWrapper = ({ children }) => (
  <Provider store={store}>
    <ConnectedRouter history={globalHistory}>
      <WithRouterWrapper>{children}</WithRouterWrapper>
    </ConnectedRouter>
  </Provider>
)

const mapStateToProps = state => ({
  pathname: state.router.location.pathname,
  search: state.router.location.search,
  hash: state.router.location.hash
})

const WithRouterWrapper = connect(mapStateToProps)(
  ({ children, pathname, search, hash }) => {
    console.log('----------')
    console.log(pathname)
    console.log(search)
    console.log(hash)
    console.log('----------')

    return (
      <ThemeProvider
        theme={{
          displayMode:
            pathname === routes.print ? DISPLAY_MODE.print : DISPLAY_MODE.web
        }}
      >
        <Fragment>
          <h1>{pathname}</h1>
          {children}
          <GlobalStyle />
        </Fragment>
      </ThemeProvider>
    )
  }
)
