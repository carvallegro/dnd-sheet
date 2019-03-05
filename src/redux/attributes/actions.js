import { createAction } from 'redux-actions'
import {
  ATTRIBUTE_INCREMENT,
  ATTRIBUTE_DECREMENT,
  ATTRIBUTE_SET_PROFICIENCY
} from './action-types'

export const incrementAttribute = createAction(ATTRIBUTE_INCREMENT)
export const decrementAttribute = createAction(ATTRIBUTE_DECREMENT)
export const setProficiency = createAction(
  ATTRIBUTE_SET_PROFICIENCY,
  (attribute, isProficient) => ({
    attribute,
    isProficient
  })
)
