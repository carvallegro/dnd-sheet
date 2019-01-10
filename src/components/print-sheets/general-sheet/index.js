import React from 'react'
import Input from '../../common/inputs/input'
import Attribute from '../../common/attribute'
import TextAreaField from '../../common/inputs/textarea'
import SavingThrows from '../../saving-throws'
import InlineField from '../../common/inputs/inline'

import Skills from '../../skills'
import {
  AttributesWrapper,
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

    <AttributesWrapper>
      <Attribute name="STRENGTH" />
      <Attribute name="DEXTERITY" />
      <Attribute name="CONSTITUTION" />
      <Attribute name="INTELLIGENCE" />
      <Attribute name="WISDOM" />
      <Attribute name="CHARISMA" />
    </AttributesWrapper>

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
