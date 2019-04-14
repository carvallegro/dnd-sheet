import React from 'react'

import classes from '@enums/classes'

import { colors } from '@styles'
import ClassIcon from '@components/class-icon'
import InputField from '@common/fields/input-field'
import { PlayerName, Race, XP } from '@character-elements/general'

import { Wrapper, IconWrapper } from './styles'

const Informations = () => (
  <Wrapper>
    <IconWrapper>
      <ClassIcon classEnum={classes.BARBARIAN} color={colors.grey} />
    </IconWrapper>
    <InputField label="Class" />
    <XP />
    <Race />
    <PlayerName />
  </Wrapper>
)

export default Informations
