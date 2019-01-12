import React from 'react'

import { HalfWidth } from '@common/layout/index'
import PageTitle from '@common/typography/index'
import Input from '@common/inputs/input'
import TextAreaField from '@common/inputs/textarea'

import { CurrentHP, DeathSaves, HitDice, TempHP } from '../../../../combat-stats/index'

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
          <Input label="Character Name" size="small" />
        </HalfWidth>
      </Heading>

      <HeadingStats>
        <Input gridArea="ac" label="AC" size="medium" />
        <Input gridArea="initiative" label="Initiative" size="medium" />
        <Input gridArea="perception" label="Passive Perception" size="medium" />
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
