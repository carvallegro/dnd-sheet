import _ from 'lodash'
import { selectSelectedClassIndex } from '@redux/classes/selectors'

export const selectAllClasses = state => _.get(state, 'data.classes', [])
export const selectSelectedClassLevels = state =>
  _(state)
    .get('data.class_levels')
    .filter(_.matchesProperty('class.id', selectSelectedClassIndex(state)))
export const selectSelectedClassSpellcasting = state =>
  _(state)
    .get('data.spellcasting')
    .filter(_.matchesProperty('class.id', selectSelectedClassIndex(state)))
