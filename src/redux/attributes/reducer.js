import _ from 'lodash'
import { handleActions } from 'redux-actions'

import attributesEnum from './enum'
import actionTypes from './action-types'

const INITIAL_STATE = _.mapValues(attributesEnum, attr => ({
  name: attr,
  base: 8,
  modifier: 0
}))

const attributeReducer = handleActions(
  {
    [actionTypes.ABILITY_INCREMENT]: (state, action) => {
      const attribute = action.attribute
      return {
        ...state,
        [attribute]: getUpdatedAttribute(
          state[attribute],
          state[attribute].base + 1
        )
      }
    },
    [actionTypes.ABILITY_DECREMENT]: (state, action) => {
      const attribute = action.attribute
      return {
        ...state,
        [attribute]: getUpdatedAttribute(
          state[attribute],
          state[attribute].base - 1
        )
      }
    }
  },
  INITIAL_STATE
)

const getUpdatedAttribute = (attribute, newBase) => {
  const base = _(newBase)
    .max(0)
    .min(20)
  return {
    ...attribute,
    base,
    modifier: _.floor(base / 2 - 5)
  }
}

export default attributeReducer
