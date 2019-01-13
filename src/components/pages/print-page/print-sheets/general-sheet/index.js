import React from 'react'

import Input from '@common/inputs/input'
import TextAreaField from '@common/inputs/textarea'
import InlineField from '@common/inputs/inline'

import Abilities, { AbilitiesWrapper } from '@character-elements/abilities'

import SavingThrows from '../../../../saving-throws/index'
import Skills from '../../../../skills/index'

import {
  CalculatedValuesWrapper,
  PageWrapper
} from './styles'

export const GeneralSheet = ({ id, gridArea }) => (
  <PageWrapper id={id} gridArea={gridArea}>
    <Input gridArea="characterName" label="Character Name" />
    <Input gridArea="classLevel" label="Class & Level" />
    <Input gridArea="expPoints" label="Experience Points" />
    <Input gridArea="race" label="Race" />
    <Input gridArea="playerName" label="Player Name" />

    <AbilitiesWrapper>
      <Abilities />
    </AbilitiesWrapper>

    <CalculatedValuesWrapper>
      <InlineField label="Inspiration" />
      <InlineField label="Proficiency Bonus" />
      <InlineField label="Speed" />
    </CalculatedValuesWrapper>

    <SavingThrows gridArea="savingThrows" />
    <Skills gridArea="skills" />

    <TextAreaField gridArea="featuresTraits" label="Features & Traits" />
    <TextAreaField
      gridArea="profLanguages"
      label="Other Prof. & Languages"
      align="right"
    />

    <TextAreaField gridArea="personnalityTrait" label="Personnality Traits" />
    <TextAreaField gridArea="ideals" label="Ideals" align="right" />

    <TextAreaField gridArea="bonds" label="Bonds" />
    <TextAreaField gridArea="flaws" label="Flaws" align="right" />
  </PageWrapper>
)

export default GeneralSheet
