import createAction from 'redux-actions/es/createAction'
import {
  DESCRIPTION_UPDATE_AGE,
  DESCRIPTION_UPDATE_ALIGNMENT,
  DESCRIPTION_UPDATE_BACKGROUND,
  DESCRIPTION_UPDATE_BONDS,
  DESCRIPTION_UPDATE_EYES,
  DESCRIPTION_UPDATE_FLAWS,
  DESCRIPTION_UPDATE_HAIR,
  DESCRIPTION_UPDATE_HEIGHT,
  DESCRIPTION_UPDATE_IDEALS,
  DESCRIPTION_UPDATE_PERSONALITY_TRAITS,
  DESCRIPTION_UPDATE_SKIN,
  DESCRIPTION_UPDATE_WEIGHT
} from '@redux/description/action-types'

export const updateAge = createAction(DESCRIPTION_UPDATE_AGE)
export const updateAlignment = createAction(DESCRIPTION_UPDATE_ALIGNMENT)
export const updateBackground = createAction(DESCRIPTION_UPDATE_BACKGROUND)
export const updateBonds = createAction(DESCRIPTION_UPDATE_BONDS)
export const updateEyes = createAction(DESCRIPTION_UPDATE_EYES)
export const updateFlaws = createAction(DESCRIPTION_UPDATE_FLAWS)
export const updateHair = createAction(DESCRIPTION_UPDATE_HAIR)
export const updateHeight = createAction(DESCRIPTION_UPDATE_HEIGHT)
export const updateIdeals = createAction(DESCRIPTION_UPDATE_IDEALS)
export const updatePersonalityTraits = createAction(
  DESCRIPTION_UPDATE_PERSONALITY_TRAITS
)
export const updateSkin = createAction(DESCRIPTION_UPDATE_SKIN)
export const updateWeight = createAction(DESCRIPTION_UPDATE_WEIGHT)
