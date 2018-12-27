import React from 'react'
import styled from 'styled-components'
import { HalfWidth, Page } from '../common/layout'
import PageHeading from '../common/typography'
import Input from '../common/inputs/input'
import TextAreaField from '../common/inputs/textarea'

const Combat = styled(Page)`
grid-template:
    'heading heading heading heading heading heading' 10rem
    'stats stats stats stats stats stats ' 10rem
    'attackAndSpell attackAndSpell attackAndSpell attackAndSpell attackAndSpell attackAndSpell ' auto
    'combatTraitsFeature combatTraitsFeature combatTraitsFeature combatTraitsFeature combatTraitsFeature combatTraitsFeature ' auto
    / 1fr 1fr 1fr 1fr 1fr 1fr;
`

export const HeadingWrapper = styled.div`
  position: relative;
  grid-area: heading;
  
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 3fr;
`
export const Heading = styled.div``
export const HeadingStats = styled.div`
  position: relative;
  display: grid;
  grid-gap: 1rem; 
  overflow: hidden;
  grid-template:
    'ac ac initiative initiative perception perception' auto
    / 1fr 1fr 1fr 1fr 1fr 1fr;
`

const CombatPage = () =>
  <Combat>
    <HeadingWrapper>
      <Heading>
        <PageHeading>Combat</PageHeading>
        <HalfWidth>
          <Input label="Character Name" size="small"/>
        </HalfWidth>
      </Heading>

      {/*<div>Test</div>*/}
      <HeadingStats>
        <Input gridArea="ac" label="AC" size="large"/>
        <Input gridArea="initiative" label="Initiative" size="large"/>
        <Input gridArea="perception" label="Passive Perception" size="large"/>
      </HeadingStats>
    </HeadingWrapper>

    <TextAreaField
      gridArea="stats"
      label="Stats"
    />

    <TextAreaField
      gridArea="attackAndSpell"
      label="Attacks & Spellcasting"
    />

    <TextAreaField
      gridArea="combatTraitsFeature"
      label="Combats Traits & Features"
    />
  </Combat>

export default CombatPage
