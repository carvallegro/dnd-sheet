import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import dataReducer from './data/reducer'
import attributesReducer from './attributes/reducer'
import descriptionReducer from './description/reducer'
import generalReducer from './general/reducer'
import skillsReducer from './skills/reducer'

export default history =>
  combineReducers({
    attributes: attributesReducer,
    description: descriptionReducer,
    general: generalReducer,
    skills: skillsReducer,
    data: dataReducer,
    router: connectRouter(history)
  })
