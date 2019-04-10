import _ from 'lodash'
import { handleActions } from 'redux-actions'

import attributesEnum from '../../enums/attributes'

import {
  incrementAttribute,
  decrementAttribute,
  setProficiency
} from './actions'

const INITIAL_STATE = _.mapValues(attributesEnum, attr => ({
  name: attr,
  base: 8,
  modifier: 0,
  isProficient: false
}))

const attributeReducer = handleActions(
  {
    [incrementAttribute]: (state, action) => {
      const attribute = action.payload
      return {
        ...state,
        [attribute]: getUpdatedAttribute(
          state[attribute],
          state[attribute].base + 1
        )
      }
    },
    [decrementAttribute]: (state, action) => {
      const attribute = action.payload
      return {
        ...state,
        [attribute]: getUpdatedAttribute(
          state[attribute],
          state[attribute].base - 1
        )
      }
    },
    [setProficiency]: (state, action) => {
      const { attribute, isProficient } = action.payload
      return {
        ...state,
        [attribute]: {
          ...state[attribute],
          isProficient
        }
      }
    }
  },
  INITIAL_STATE
)

const getUpdatedAttribute = (attribute, newBase) => {
  const attributeBase = _(newBase)
    .max(0)
    .min(20)
  return {
    ...attribute,
    base: attributeBase,
    modifier: _.floor(base / 2 - 5)
  }
}

export default attributeReducer
