import { handleActions } from 'redux-actions'
import {
  updateAge,
  updateAlignment,
  updateBackground,
  updateBonds,
  updateEyes,
  updateFlaws,
  updateHair,
  updateHeight,
  updateIdeals,
  updatePersonalityTraits,
  updateSkin,
  updateWeight
} from './actions'

const INITIAL_STATE = {
  age: 31,
  alignment: 'Loyal Good',
  background: 'Apprentice', // TODO: Extract Race in own reducer ?
  bonds: 'Your clan is the most important thing in your life, even when they are far from you.',
  eyes: 'Blue',
  flaws: 'It is nature’s way that the strong survive and the weak perish.',
  hair: 'Bald',
  height: '231cm',
  ideals: '',
  skin: 'Pale',
  personalityTraits: 'You once ran 25 miles to warn your clan of an approaching threat, and you’d do the same again.',
  weight: '142kg'
}

const descriptionReducer = handleActions(
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
    [updateBonds]: (state, action) => ({
      ...state,
      bonds: action.payload
    }),

    [updateEyes]: (state, action) => ({
      ...state,
      eyes: action.payload
    }),
    [updateFlaws]: (state, action) => ({
      ...state,
      flaws: action.payload
    }),
    [updateHair]: (state, action) => ({
      ...state,
      hair: action.payload
    }),
    [updateHeight]: (state, action) => ({
      ...state,
      height: action.payload
    }),
    [updateIdeals]: (state, action) => ({
      ...state,
      ideals: action.payload
    }),
    [updatePersonalityTraits]: (state, action) => ({
      ...state,
      personalityTraits: action.payload
    }),
    [updateSkin]: (state, action) => ({
      ...state,
      skin: action.payload
    }),
    [updateWeight]: (state, action) => ({
      ...state,
      weight: action.payload
    })
  },
  INITIAL_STATE
)

export default descriptionReducer
