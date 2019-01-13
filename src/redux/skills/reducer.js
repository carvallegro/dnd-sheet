import _ from 'lodash'
import { handleActions } from 'redux-actions'

const MOCK_SKILLS = [
  { name: 'Acrobatics', attribute: 'Dex' },
  { name: 'Athletics', attribute: 'Str' },
  { name: 'Animal Handl.', attribute: 'Wis' },
  { name: 'Arcana', attribute: 'Int' },
  { name: 'Deception', attribute: 'Cha' },
  { name: 'History', attribute: 'Int' },
  { name: 'Insight', attribute: 'Wis' },
  { name: 'Intimidation', attribute: 'Cha' },
  { name: 'Investigation', attribute: 'Int' },
  { name: 'Medicine', attribute: 'Wis' },
  { name: 'Nature', attribute: 'Int' },
  { name: 'Perception', attribute: 'Wis' },
  { name: 'Performance', attribute: 'Cha' },
  { name: 'Persuasion', attribute: 'Cha' },
  { name: 'Religion', attribute: 'Int' },
  { name: 'Sleight of Hand', attribute: 'Dex' },
  { name: 'Stealth', attribute: 'Dex' },
  { name: 'Survival', attribute: 'Wis' }
]
