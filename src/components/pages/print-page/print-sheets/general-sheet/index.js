import React from 'react'

import Input from '@common/inputs/input'
import TextAreaField from '@common/inputs/textarea'
import InlineField from '@common/inputs/inline'
import { GridArea } from '@common/layout'
import Label from '@common/typography/label'

import Attributes, { AttributesWrapper } from '@character-elements/attributes'
import Skills from '@character-elements/skills'
import { CharacterName, PlayerName } from '@character-elements/general'

import SavingThrows from '../../../../saving-throws/index'

import { CalculatedValuesWrapper, PageWrapper } from './styles'

export const GeneralSheet = ({ id, gridArea }) => (
  <PageWrapper id={id} gridArea={gridArea}>
    <CharacterName gridArea="characterName" label="Character Name" />
    <Input gridArea="classLevel" label="Class & Level" />
    <Input gridArea="expPoints" label="Experience Points" />
    <Input gridArea="race" label="Race" />
    <PlayerName gridArea="playerName" />

    <AttributesWrapper>
      <Attributes />
    </AttributesWrapper>

    <CalculatedValuesWrapper>
      <InlineField label="Inspiration" />
      <InlineField label="Proficiency Bonus" />
      <InlineField label="Speed" />
    </CalculatedValuesWrapper>

    <SavingThrows gridArea="savingThrows" />

    <GridArea gridArea="skills">
      <Label>Skills</Label>
      <Skills />
    </GridArea>

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
