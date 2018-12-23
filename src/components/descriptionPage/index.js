import React from 'react'
import { Page } from '../common/layout'
import { PageHeading } from '../common/typography'
import Input from '../common/inputs/input'
import styled from 'styled-components'

import Attribute from '../common/attribute'
import TextArea from '../common/inputs/textarea'
import Skills from '../skills'
import SavingThrows from '../saving-throws'
import InlineField from '../common/inputs/inline'

const PageWrapper = styled(Page)`
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-areas: 
    "characterName characterName classLevel classLevel expPoints  expPoints"
    "characterName characterName race       race       playerName playerName"
    
    "attributes attributes attributes attributes attributes attributes"
    
    "calculatedValues calculatedValues calculatedValues calculatedValues calculatedValues calculatedValues"
    
    "savingThrows skills skills skills skills skills"
    
    "featuresTraits featuresTraits featuresTraits featuresTraits profLanguages profLanguages"
    
    "personnalityTrait personnalityTrait personnalityTrait ideals ideals ideals"
    
    "bonds bonds bonds flaws flaws flaws"
    ;
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

export const DescriptionPage = () => <PageWrapper>
  <Input gridArea='characterName' label='Character Name'/>
  <Input gridArea='classLevel' label='Class & Level'/>
  <Input gridArea='expPoints' label='Experience Points'/>
  <Input gridArea='race' label='Race'/>
  <Input gridArea='playerName' label='Player Name'/>

  <AttributesWrapper>
    <Attribute/>
    <Attribute/>
    <Attribute/>
    <Attribute/>
    <Attribute/>
    <Attribute/>
  </AttributesWrapper>

  <CalculatedValuesWrapper>
    <InlineField label='Inspiration'/>
    <InlineField label='Proficiency Bonus'/>
    <InlineField label='Speed'/>
  </CalculatedValuesWrapper>

  <SavingThrows gridArea='savingThrows'/>
  <Skills gridArea='skills' />

  <TextArea gridArea='featuresTraits' label='Features & Traits'/>
  <TextArea gridArea='profLanguages' label='Other Prof. & Languages' align='right'/>

  <TextArea gridArea='personnalityTrait' label='Personnality Traits'/>
  <TextArea gridArea='ideals' label='Ideals' align='right'/>

  <TextArea gridArea='bonds' label='Bonds'/>
  <TextArea gridArea='flaws' label='Flaws' align='right'/>
</PageWrapper>

export default DescriptionPage
