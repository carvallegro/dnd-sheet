import React from 'react'
import { Page } from '../common/layout'
import {PageHeading} from '../common/typography'
import Input from '../common/inputs'
import styled from 'styled-components'

import Attribute from '../common/attribute'

const PageWrapper = styled(Page)`
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-areas: 
    "pageHeading pageHeading pageHeading pageHeading pageHeading pageHeading"
    
    "characterName characterName classLevel classLevel expPoints  expPoints"
    "characterName characterName race       race       playerName playerName"
    
    "attributes attributes attributes attributes attributes attributes"
    ;
`

const AttributesWrapper = styled.div`
  grid-area: attributes;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

export const DescriptionPage = () => <PageWrapper>
  <PageHeading gridArea='pageHeading'>Description</PageHeading>
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
</PageWrapper>

export default DescriptionPage
