import _ from 'lodash'
import { handleActions } from 'redux-actions'

const INITIAL_STATE = [
  {
    name: 'Acrobatics',
    attribute: 'DEX',
    bonus: 0,
    proficiency: false
  },
  {
    name: 'Athletics',
    attribute: 'STR',
    bonus: 0,
    proficiency: false
  },
  {
    name: 'Animal Handl.',
    attribute: 'WIS',
    bonus: 0,
    proficiency: false
  },
  {
    name: 'Arcana',
    attribute: 'INT',
    bonus: 0,
    proficiency: false
  },
  {
    name: 'Deception',
    attribute: 'CHA',
    bonus: 0,
    proficiency: false
  },
  {
    name: 'History',
    attribute: 'INT',
    bonus: 0,
    proficiency: false
  },
  {
    name: 'Insight',
    attribute: 'WIS',
    bonus: 0,
    proficiency: false
  },
  {
    name: 'Intimidation',
    attribute: 'CHA',
    bonus: 0,
    proficiency: false
  },
  {
    name: 'Investigation',
    attribute: 'INT',
    bonus: 0,
    proficiency: false
  },
  {
    name: 'Medicine',
    attribute: 'WIS',
    bonus: 0,
    proficiency: false
  },
  {
    name: 'Nature',
    attribute: 'INT',
    bonus: 0,
    proficiency: false
  },
  {
    name: 'Perception',
    attribute: 'WIS',
    bonus: 0,
    proficiency: false
  },
  {
    name: 'Performance',
    attribute: 'CHA',
    bonus: 0,
    proficiency: false
  },
  {
    name: 'Persuasion',
    attribute: 'CHA',
    bonus: 0,
    proficiency: false
  },
  {
    name: 'Religion',
    attribute: 'INT',
    bonus: 0,
    proficiency: false
  },
  {
    name: 'Sleight of Hand',
    attribute: 'DEX',
    bonus: 0,
    proficiency: false
  },
  {
    name: 'Stealth',
    attribute: 'DEX',
    bonus: 0,
    proficiency: false
  },
  {
    name: 'Survival',
    attribute: 'WIS',
    bonus: 0,
    proficiency: false
  }
]

// TODO: Add reducers
const skillReducer = handleActions({}, INITIAL_STATE)

export default skillReducer
