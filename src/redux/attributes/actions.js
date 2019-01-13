import actionTypes from './action-types'

export const incrementAbility = ability => ({
  type: actionTypes.ABILITY_INCREMENT,
  ability
})

export const decrementAbility = ability => ({
  type: actionTypes.ABILITY_DECREMENT,
  ability
})
