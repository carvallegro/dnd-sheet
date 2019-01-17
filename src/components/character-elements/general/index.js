import React from 'react'
import { connect } from 'react-redux'

import Input from '@common/inputs/input'
import { updateCharacterName } from '@redux/general/actions'

// updateAge,
//   updateAlignment,
//   updateBackground,
//   updateCharacterName,
//   updateEyes,
//   updateHair,
//   updateHeight,
//   updatePlayerName,
//   updateSkin,
//   updateWeight,
//   updateXP

export const CharacterName = connect(
  state => ({
    characterName: state.general.name
  }),
  dispatch => ({
    updateName: name => dispatch(updateCharacterName(name))
  })
)(props => (
  <Input
    label="Character Name"
    value={props.characterName}
    onChange={props.updateName}
    {...props}
  />
))
