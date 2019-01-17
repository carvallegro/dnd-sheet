import _ from 'lodash'
import { handleActions } from 'redux-actions'
import { XP_TABLE } from './constants'
import {
  updateAge,
  updateAlignment,
  updateBackground,
  updateCharacterName,
  updateEyes,
  updateHair,
  updateHeight,
  updatePlayerName,
  updateSkin,
  updateWeight,
  updateXP
} from './actions'

const INITIAL_STATE = {
  name: 'Cletus Flowerhunter',
  playerName: 'Valentin',
  experiencePoints: 500,
  globalLevel: 1,
  background: 'Apprentice',
  alignment: 'Loyal Good',
  age: 31,
  height: '231cm',
  weight: '142kg',
  skin: 'Pale',
  eyes: 'Blue',
  hair: 'Bald',
  classes: [
    {
      name: 'Barbarian',
      subclass: 'of the Sacred Kin'
    }
  ]
}

// TODO: Create the things
const generalReducer = handleActions(
  {
    [updateAge]: (state, action) => ({
      ...state,
      age: action.payload
    }),
    [updateAlignment]: (state, action) => ({
      ...state,
      alignment: action.payload
    }),
    [updateBackground]: (state, action) => ({
      ...state,
      background: action.payload
    }),
    [updateCharacterName]: (state, action) => ({
      ...state,
      name: action.payload
    }),
    [updateEyes]: (state, action) => ({
      ...state,
      eyes: action.payload
    }),
    [updateHair]: (state, action) => ({
      ...state,
      hair: action.payload
    }),
    [updateHeight]: (state, action) => ({
      ...state,
      height: action.payload
    }),
    [updatePlayerName]: (state, action) => ({
      ...state,
      playerName: action.payload
    }),
    [updateSkin]: (state, action) => ({
      ...state,
      skin: action.payload
    }),
    [updateWeight]: (state, action) => ({
      ...state,
      weight: action.payload
    }),
    [updateXP]: (state, action) => ({
      ...state,
      ...levelUpByXP(action.payload)
    })
  },
  INITIAL_STATE
)

export const levelUpByXP = xp => {
  const experiencePoints = Math.max(0, xp)
  return {
    experiencePoints,
    globalLevel:
      _(XP_TABLE)
        .filter(v => v > experiencePoints)
        .count() - 1
  }
}

export default generalReducer
