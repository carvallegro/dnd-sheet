import _ from 'lodash'

export const selectSelectedClass = state =>
  _(state).get('classes.selectedClass', {})
export const selectSelectedClassIndex = state =>
  _(state).get('classes.selectedClass.index')
