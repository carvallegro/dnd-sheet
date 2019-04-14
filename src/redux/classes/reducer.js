import { handleActions } from 'redux-actions'
import { selectClass } from '@redux/classes/actions'

const INITIAL_STATE = {
  classes: {
    selectedClass: {
      index: null
    }
  }
}

const classesReducer = handleActions(
  {
    [selectClass]: (state, action) => ({
      ...state,
      selectClass: {
        index: action.payload
      }
    })
  },
  INITIAL_STATE
)

export default classesReducer
