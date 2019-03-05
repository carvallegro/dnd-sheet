import createAction from 'redux-actions/es/createAction'
import { SKILLS_SET_PROFICIENCY } from '@redux/skills/action-types'

export const setProficiency = createAction(
  SKILLS_SET_PROFICIENCY,
  (skill, isProficient) => ({
    skill,
    isProficient
  })
)
