import _ from 'lodash'

export const selectAllClasses = state => _.get(state, 'data.classes', [])
