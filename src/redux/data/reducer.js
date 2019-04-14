import { handleActions } from 'redux-actions'
import { loadAllStoredData } from '@redux/data/actions'
import indexedItems from '@enums/indexedItems'

const INITIAL_STATE = {
  classes: [],
  subclasses: [],
  class_levels: [],
  spellcasting: []
}

const dataReducer = handleActions(
  {
    [loadAllStoredData]: (state, action) => ({
      ...state,
      classes: action.payload[indexedItems.CLASSES],
      subclasses: action.payload[indexedItems.SUBCLASSES],
      class_levels: action.payload[indexedItems.LEVELS],
      spellcasting: action.payload[indexedItems.SPELLCASTING]
    })
  },
  INITIAL_STATE
)

export default dataReducer
