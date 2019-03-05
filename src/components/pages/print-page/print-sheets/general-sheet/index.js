import React from 'react'

import InputField from '@common/fields/input-field'
import TextAreaField from '@common/fields/textarea-field'
import InlineField from '@common/fields/inline'
import { GridArea } from '@common/layout'
import Label from '@common/typography/label'

import Attributes, { AttributesWrapper } from '@character-elements/attributes'
import Skills from '@character-elements/skills'
import {
  CharacterName,
  FeaturesAndTraits,
  OtherProfAndLanguages,
  PlayerName
} from '@character-elements/general'

import SavingThrows from '../../../../character-elements/saving-throws/index'

import { CalculatedValuesWrapper, PageWrapper } from './styles'
import {
  Bonds,
  Flaws,
  Ideals,
  PersonalityTraits
} from '@character-elements/description'

export const GeneralSheet = ({ id, gridArea }) => (
  <PageWrapper id={id} gridArea={gridArea}>
    <CharacterName gridArea="characterName" label="Character Name" />
    <InputField gridArea="classLevel" label="Class & Level" />
    <InputField gridArea="expPoints" label="Experience Points" />
    <InputField gridArea="race" label="Race" />
    <PlayerName gridArea="playerName" />

    <AttributesWrapper>
      <Attributes />
    </AttributesWrapper>

    <CalculatedValuesWrapper>
      <InlineField label="Inspiration" />
      <InlineField label="Proficiency Bonus" />
      <InlineField label="Speed" />
    </CalculatedValuesWrapper>

    <GridArea gridArea="savingThrows">
      <Label>Saving Throws</Label>
      <SavingThrows />
    </GridArea>

    <GridArea gridArea="skills">
      <Label>Skills</Label>
      <Skills />
    </GridArea>

    <FeaturesAndTraits gridArea="featuresTraits" />
    <OtherProfAndLanguages gridArea="profLanguages" align="right" />
    <PersonalityTraits gridArea="personalityTrait" />
    <Ideals gridArea="ideals" align="right" />
    <Bonds gridArea="bonds" />
    <Flaws gridArea="flaws" align="right" />
  </PageWrapper>
)

export default GeneralSheet
