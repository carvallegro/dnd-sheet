import { handleActions } from 'redux-actions'

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
const generalReducer = handleActions({}, INITIAL_STATE)

export default generalReducer
