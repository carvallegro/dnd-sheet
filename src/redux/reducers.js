import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import attributesReducer from './attributes/reducer'

export default history =>
  combineReducers({
    attributes: attributesReducer,
    router: connectRouter(history)
  })
