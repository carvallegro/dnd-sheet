import React from 'react'

import { PlayerName, Race, XP } from '@character-elements/general'

import { ClassIcon, Wrapper } from './styles'

import BarbarianIcon from './class-icons/barbarian.svg'
import InputField from '@common/fields/input-field'

const Informations = () => <Wrapper>
  <ClassIcon src={BarbarianIcon}/>
  <InputField label='Class'/>
  <XP />
  <Race />
  <PlayerName />
</Wrapper>

export default Informations
