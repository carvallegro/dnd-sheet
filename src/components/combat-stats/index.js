import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Checkbox from '@common/fields/checkbox'
import InputField from '@common/fields/input-field'
import Label from '@common/typography/label'

import { SIZES } from '@styles'
import { StatLabel, StatOutline, StatWrapper } from './styles'

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

const SaveGroup = styled.div`
  align-self: ${({ reversed }) => (reversed ? 'flex-end' : 'flex-start')};
  margin: 0.4rem 0 0.2rem;
  display: flex;
  width: 60%;
  flex-direction: ${({ reversed }) => (reversed ? 'row-reverse' : 'row')};
  justify-content: space-between;
`
SaveGroup.propTypes = {
  reversed: PropTypes.bool
}

export const DeathSaves = () => (
  <StatWrapper>
    <StatLabel>Death Saves</StatLabel>
    <SaveWrapper>
      <SaveGroup>
        <Checkbox name="success-save-a" size={SIZES.small} />
        <Checkbox name="success-save-b" size={SIZES.small} />
        <Checkbox name="success-save-c" size={SIZES.small} />
      </SaveGroup>
      <Label size="xsmall">Successes</Label>
      <SaveGroup reversed>
        <Checkbox name="fail-save-a" size={SIZES.small} />
        <Checkbox name="fail-save-b" size={SIZES.small} />
        <Checkbox name="fail-save-c" size={SIZES.small} />
      </SaveGroup>
      <Label align="right" size="xsmall">
        Failures
      </Label>
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
