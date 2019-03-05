import _ from 'lodash'
import { handleActions } from 'redux-actions'
import { MAX_LEVEL, MIN_LEVEL, XP_TABLE } from './constants'
import {
  updateCharacterName,
  updateLevel,
  updatePlayerName,
  updateXP,
  updateFeaturesAndTraits,
  updateOtherProfLanguage
} from './actions'

const INITIAL_STATE = {
  name: 'Cletus Flowerhunter',
  playerName: 'Valentin',
  experiencePoints: 500,
  globalLevel: 1,
  proficiencyBonus: 2,
  race: 'Goliath', // TODO: Extract Race in own reducer
  classes: [
    // TODO: Extract Classes in own reducer
    {
      name: 'Barbarian',
      subclass: 'of the Sacred Kin',
      level: 1
    }
  ],
  otherProfLanguage: 'English, French, _Italian_',
  featuresAndTraits: 'There are **some**'
  /*
    TODO: Add:
      - Stats (Inspiration, Proficiency Bonus, Speed, Encumbrance)
      - Other Prof. and Languages
      - Features & Traits
   */
}

const generalReducer = handleActions(
  {
    [updateCharacterName]: (state, action) => ({
      ...state,
      name: action.payload
    }),
    [updateLevel]: (state, action) => ({
      ...state,
      ...levelUp(action.payload)
    }),
    [updatePlayerName]: (state, action) => ({
      ...state,
      playerName: action.payload
    }),
    [updateXP]: (state, action) => ({
      ...state,
      ...levelUpByXP(action.payload)
    }),
    [updateOtherProfLanguage]: (state, action) => ({
      ...state,
      otherProfLanguage: action.payload
    }),
    [updateFeaturesAndTraits]: (state, action) => ({
      ...state,
      featuresAndTraits: action.payload
    })
  },
  INITIAL_STATE
)

export const levelUp = newLevel => {
  let level = Math.min(MAX_LEVEL, newLevel)
  level = Math.max(MIN_LEVEL, level)
  return {
    experiencePoints: XP_TABLE[level],
    globalLevel: level,
    proficiencyBonus: getProficiencyBonus(level)
  }
}

export const levelUpByXP = xp => {
  const experiencePoints = Math.max(0, xp)
  const level =
    _(XP_TABLE)
      .filter(v => v <= experiencePoints)
      .size() - 1
  return {
    experiencePoints,
    globalLevel: level,
    proficiencyBonus: getProficiencyBonus(level)
  }
}

export const getProficiencyBonus = level => Math.ceil(level / 4) + 1

export default generalReducer
