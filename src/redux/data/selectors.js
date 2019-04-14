import _ from 'lodash'

export const selectAllClasses = state => _.get(state, 'data.classes', [])
export const selectSelectedClassLevels = () => {}
export const selectSelectedClassSpellcasting = () => {}
// TODO: Finish those selectors
