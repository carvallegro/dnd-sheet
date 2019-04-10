import { handleActions } from 'redux-actions'
import { loadAllStoredData } from '@redux/data/actions'
import indexedItems from '@enums/indexedItems'

const INITIAL_STATE = {
  classes: []
}

const dataReducer = handleActions(
  {
    [loadAllStoredData]: (state, action) => {
      return {
        ...state,
        classes: action.payload[indexedItems.CLASS]
      }
    }
  },
  INITIAL_STATE
)

export default dataReducer
