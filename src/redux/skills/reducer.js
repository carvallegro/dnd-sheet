import { handleActions } from 'redux-actions'
import { setProficiency } from '@redux/skills/actions'

const INITIAL_STATE = [
  {
    name: 'Acrobatics',
    attribute: 'DEX',
    bonus: 0,
    isProficient: false
  },
  {
    name: 'Athletics',
    attribute: 'STR',
    bonus: 0,
    isProficient: false
  },
  {
    name: 'Animal Handl.',
    attribute: 'WIS',
    bonus: 0,
    isProficient: false
  },
  {
    name: 'Arcana',
    attribute: 'INT',
    bonus: 0,
    isProficient: false
  },
  {
    name: 'Deception',
    attribute: 'CHA',
    bonus: 0,
    isProficient: false
  },
  {
    name: 'History',
    attribute: 'INT',
    bonus: 0,
    isProficient: false
  },
  {
    name: 'Insight',
    attribute: 'WIS',
    bonus: 0,
    isProficient: false
  },
  {
    name: 'Intimidation',
    attribute: 'CHA',
    bonus: 0,
    isProficient: false
  },
  {
    name: 'Investigation',
    attribute: 'INT',
    bonus: 0,
    isProficient: false
  },
  {
    name: 'Medicine',
    attribute: 'WIS',
    bonus: 0,
    isProficient: false
  },
  {
    name: 'Nature',
    attribute: 'INT',
    bonus: 0,
    isProficient: false
  },
  {
    name: 'Perception',
    attribute: 'WIS',
    bonus: 0,
    isProficient: false
  },
  {
    name: 'Performance',
    attribute: 'CHA',
    bonus: 0,
    isProficient: false
  },
  {
    name: 'Persuasion',
    attribute: 'CHA',
    bonus: 0,
    isProficient: false
  },
  {
    name: 'Religion',
    attribute: 'INT',
    bonus: 0,
    isProficient: false
  },
  {
    name: 'Sleight of Hand',
    attribute: 'DEX',
    bonus: 0,
    isProficient: false
  },
  {
    name: 'Stealth',
    attribute: 'DEX',
    bonus: 0,
    isProficient: false
  },
  {
    name: 'Survival',
    attribute: 'WIS',
    bonus: 0,
    isProficient: false
  }
]

// TODO: Add reducers
const skillReducer = handleActions(
  {
    [setProficiency]: (state, action) => {
      const { skill, isProficient } = action.payload
      return {
        ...state,
        [skill]: {
          ...state[skill],
          isProficient
        }
      }
    }
  },
  INITIAL_STATE
)

export default skillReducer
