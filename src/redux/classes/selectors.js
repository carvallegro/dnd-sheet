import _ from 'lodash'

export const selectSelectedClass = state => _(state).get('classes.selectClass', {})
export const selectSelectedClassIndex = state => _(state).get('classes.selectClass.index', {})
