import React from 'react'

import classes from '@enums/classes'

import { PlayerName, Race, XP } from '@character-elements/general'
import InputField from '@common/fields/input-field'

import { Wrapper } from './styles'
import ClassIcon from '@components/class-icon'

const Informations = () => (
  <Wrapper>
    <ClassIcon classEnum={classes.BARBARIAN} />
    <InputField label="Class" />
    <XP />
    <Race />
    <PlayerName />
  </Wrapper>
)

export default Informations
