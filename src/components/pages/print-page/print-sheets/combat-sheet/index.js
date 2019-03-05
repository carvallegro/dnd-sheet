import React from 'react'

import { HalfWidth } from '@common/layout/index'
import PageTitle from '@common/typography/index'
import InputField from '@common/fields/input-field'
import TextAreaField from '@common/fields/textarea-field'

import {
  CurrentHP,
  DeathSaves,
  HitDice,
  TempHP
} from '../../../../combat-stats/index'

import {
  Combat,
  Heading,
  HeadingStats,
  HeadingWrapper,
  StatGroupWrapper
} from './styles'

const CombatSheet = ({ id, gridArea }) => (
  <Combat id={id} gridArea={gridArea}>
    <HeadingWrapper>
      <Heading>
        <PageTitle>Combat</PageTitle>
        <HalfWidth>
          <InputField label="Character Name" size="small" />
        </HalfWidth>
      </Heading>

      <HeadingStats>
        <InputField gridArea="ac" label="AC" size="medium" />
        <InputField gridArea="initiative" label="Initiative" size="medium" />
        <InputField
          gridArea="perception"
          label="Passive Perception"
          size="medium"
        />
      </HeadingStats>
    </HeadingWrapper>

    <StatGroupWrapper>
      <HitDice />
      <DeathSaves />
      <CurrentHP />
      <TempHP />
    </StatGroupWrapper>

    <TextAreaField gridArea="attackAndSpell" label="Attacks & Spellcasting" />

    <TextAreaField
      gridArea="combatTraitsFeature"
      label="Combats Traits & Features"
    />
  </Combat>
)

export default CombatSheet
