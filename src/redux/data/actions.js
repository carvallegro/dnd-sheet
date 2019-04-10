import { createAction } from 'redux-actions'
import { LOAD_ALL_STORED_DATA } from '@redux/data/action-types'

export const loadAllStoredData = createAction(LOAD_ALL_STORED_DATA)
