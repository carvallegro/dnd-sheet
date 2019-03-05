import { createAction } from 'redux-actions'
import {
  GENERAL_UPDATE_CHARACTER_NAME,
  GENERAL_UPDATE_EXPERIENCE_POINTS,
  GENERAL_UPDATE_FEATURES_AND_TRAITS,
  GENERAL_UPDATE_LEVEL,
  GENERAL_UPDATE_OTHER_PROF_AND_LANGUAGE,
  GENERAL_UPDATE_PLAYER_NAME,
  GENERAL_UPDATE_RACE
} from './action-types'

export const updateCharacterName = createAction(GENERAL_UPDATE_CHARACTER_NAME)
export const updateLevel = createAction(GENERAL_UPDATE_LEVEL)
export const updatePlayerName = createAction(GENERAL_UPDATE_PLAYER_NAME)
export const updateRace = createAction(GENERAL_UPDATE_RACE)
export const updateXP = createAction(GENERAL_UPDATE_EXPERIENCE_POINTS)
export const updateOtherProfLanguage = createAction(
  GENERAL_UPDATE_OTHER_PROF_AND_LANGUAGE
)
export const updateFeaturesAndTraits = createAction(
  GENERAL_UPDATE_FEATURES_AND_TRAITS
)
