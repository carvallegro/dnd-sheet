import { createAction } from 'redux-actions'
import {
  GENERAL_UPDATE_AGE,
  GENERAL_UPDATE_ALIGNMENT,
  GENERAL_UPDATE_BACKGROUND,
  GENERAL_UPDATE_CHARACTER_NAME,
  GENERAL_UPDATE_EXPERIENCE_POINTS,
  GENERAL_UPDATE_EYES,
  GENERAL_UPDATE_HAIR,
  GENERAL_UPDATE_HEIGHT,
  GENERAL_UPDATE_LEVEL,
  GENERAL_UPDATE_PLAYER_NAME,
  GENERAL_UPDATE_SKIN,
  GENERAL_UPDATE_WEIGHT
} from './action-types'

export const updateAge = createAction(GENERAL_UPDATE_AGE)
export const updateAlignment = createAction(GENERAL_UPDATE_ALIGNMENT)
export const updateBackground = createAction(GENERAL_UPDATE_BACKGROUND)
export const updateCharacterName = createAction(GENERAL_UPDATE_CHARACTER_NAME)
export const updateEyes = createAction(GENERAL_UPDATE_EYES)
export const updateHair = createAction(GENERAL_UPDATE_HAIR)
export const updateHeight = createAction(GENERAL_UPDATE_HEIGHT)
export const updateLevel = createAction(GENERAL_UPDATE_LEVEL)
export const updatePlayerName = createAction(GENERAL_UPDATE_PLAYER_NAME)
export const updateSkin = createAction(GENERAL_UPDATE_SKIN)
export const updateWeight = createAction(GENERAL_UPDATE_WEIGHT)
export const updateXP = createAction(GENERAL_UPDATE_EXPERIENCE_POINTS)
