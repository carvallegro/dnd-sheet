import React from 'react'
import { Page } from '../common/layout'
import { PageHeading } from '../common/typography'
import Input from '../common/inputs/input'
import styled from 'styled-components'

import Attribute from '../common/attribute'
import TextAreaField from '../common/inputs/textarea'
import Skills from '../skills'
import SavingThrows from '../saving-throws'
import InlineField from '../common/inputs/inline'

const PageWrapper = styled(Page)`
  //grid-template-columns: repeat(6, 1fr);
  //grid-auto-rows: minmax(40px, auto);
  //grid-template-areas:
  //  "characterName characterName classLevel classLevel expPoints  expPoints"
  //  "characterName characterName race       race       playerName playerName"
  //
  //  "attributes attributes attributes attributes attributes attributes"
  //
  //  "calculatedValues calculatedValues calculatedValues calculatedValues calculatedValues calculatedValues"
  //
  //  "savingThrows skills skills skills skills skills"
  //
  //  "featuresTraits featuresTraits featuresTraits featuresTraits profLanguages profLanguages"
  //
  //  "personnalityTrait personnalityTrait personnalityTrait ideals ideals ideals"
  //
  //  "bonds bonds bonds flaws flaws flaws"
  //  ;

  grid-template:
    'characterName characterName classLevel classLevel expPoints  expPoints' 3.2rem
    'characterName characterName race       race       playerName playerName' 3.2rem
    'attributes attributes attributes attributes attributes attributes' 6rem
    'calculatedValues calculatedValues calculatedValues calculatedValues calculatedValues calculatedValues' 2.4rem
    'savingThrows skills skills skills skills skills' 140px
    'featuresTraits featuresTraits featuresTraits featuresTraits profLanguages profLanguages' auto
    'personnalityTrait personnalityTrait personnalityTrait ideals ideals ideals' minmax(
      40px,
      auto
    )
    'bonds bonds bonds flaws flaws flaws' minmax(40px, auto)
    / 1fr 1fr 1fr 1fr 1fr 1fr;
`

const AttributesWrapper = styled.div`
  grid-area: attributes;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

const CalculatedValuesWrapper = styled(AttributesWrapper)`
  grid-area: calculatedValues;
  justify-content: space-between;
`

export const DescriptionPage = () => (
  <PageWrapper>
    <Input gridArea="characterName" label="Character Name" />
    <Input gridArea="classLevel" label="Class & Level" />
    <Input gridArea="expPoints" label="Experience Points" />
    <Input gridArea="race" label="Race" />
    <Input gridArea="playerName" label="Player Name" />

    <AttributesWrapper>
      <Attribute name='STRENGTH'/>
      <Attribute name='DEXTERITY'/>
      <Attribute name='CONSTITUTION'/>
      <Attribute name='INTELLIGENCE'/>
      <Attribute name='WISDOM'/>
      <Attribute name='CHARISMA'/>
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

export default DescriptionPage
