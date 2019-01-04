import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from './reducers'

export const globalHistory = createBrowserHistory({
  basename: '/dnd-sheet'
})

const store = createStore(
  createRootReducer(globalHistory), // root reducer with router state
  {},
  compose(
    applyMiddleware(
      routerMiddleware(globalHistory), // for dispatching history actions
      // ... other middlewares ...
    ),
  ),
)

export default store
