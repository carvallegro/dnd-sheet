import React from 'react'
import { connect } from 'react-redux'

import Input from '@common/inputs/input'
import {
  updateAge,
  updateCharacterName,
  updateEyes,
  updateHair,
  updateHeight,
  updatePlayerName,
  updateSkin,
  updateWeight
} from '@redux/general/actions'

// updateAge,
//   updateAlignment,
//   updateBackground,
//   updateXP

export const connectInput = (label, action, mapValue) =>
  connect(
    state => ({
      value: mapValue(state)
    }),
    dispatch => ({
      updateValue: name => dispatch(action(name))
    })
  )(props => (
    <Input
      label={label}
      value={props.value}
      onChange={props.updateValue}
      {...props}
    />
  ))

export const Age = connectInput('Age', updateAge, state => state.general.age)

export const CharacterName = connectInput(
  'Character Name',
  updateCharacterName,
  state => state.general.name
)

export const PlayerName = connectInput(
  'Player Name',
  updatePlayerName,
  state => state.general.playerName
)

export const Eyes = connectInput(
  'Eyes',
  updateEyes,
  state => state.general.eyes
)

export const Hair = connectInput(
  'Hair',
  updateHair,
  state => state.general.hair
)

export const Height = connectInput(
  'Height',
  updateHeight,
  state => state.general.height
)

export const Skin = connectInput(
  'Skin',
  updateSkin,
  state => state.general.skin
)

export const Weight = connectInput(
  'Weight',
  updateWeight,
  state => state.general.weight
)
