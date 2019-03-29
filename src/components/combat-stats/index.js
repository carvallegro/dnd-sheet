import React from 'react'
import styled from 'styled-components'

import InputField from '@common/fields/input-field'

import { StatLabel, StatOutline, StatWrapper } from './styles'
import DeathSavesCheckboxes from '@common/death-saves-checkboxes'

export const HitDice = () => (
  <StatWrapper>
    <StatLabel>Hit Dice</StatLabel>
    <StatOutline>
      <InputField label="Total" size="xsmall" />
    </StatOutline>
  </StatWrapper>
)

const SaveWrapper = styled.div`
  padding: 0 0.2rem;
  display: flex;
  flex-direction: column;
`

export const DeathSaves = () => (
  <StatWrapper>
    <StatLabel>Death Saves</StatLabel>
    <SaveWrapper>
      <DeathSavesCheckboxes label="Successes" name="success-save" />
      <DeathSavesCheckboxes label="Failures" name="fail-save" reversed />
    </SaveWrapper>
  </StatWrapper>
)

export const CurrentHP = () => (
  <StatWrapper>
    <StatLabel>Current HP</StatLabel>
    <StatOutline>
      <InputField label="Max HP" size="xsmall" />
    </StatOutline>
  </StatWrapper>
)

export const TempHP = () => (
  <StatWrapper>
    <StatLabel>Temp HP</StatLabel>
    <StatOutline />
  </StatWrapper>
)
