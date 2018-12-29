import React from 'react'
import PageTitle from '../common/typography'
import TextAreaField from '../common/inputs/textarea'
import Input from '../common/inputs/input'
import MagicStat from '../common/magic-stat'
import MagicSpells from '../common/magic-spells'
import { Heading } from './styles'
import styled from 'styled-components'
import { Page } from '../common/layout'

export const Magic = styled(Page)`
  grid-template:
    'heading heading heading heading heading heading' 8rem
    'cantrips cantrips cantrips cantrips cantrips cantrips ' 15rem
    'spellLevel1 spellLevel1 spellLevel1 spellLevel2 spellLevel2 spellLevel2' auto
    / 1fr 1fr 1fr 1fr 1fr 1fr;
`

const MagicPageA = () => (
  <Magic>
    <Heading>
      <PageTitle>Magic</PageTitle>
      <Input gridArea="characterName" label="Character Name" size="small" />

      <Input
        gridArea="spellcastingClass"
        label="Spellcasting Class"
        size="large"
      />
      <Input
        gridArea="spellcastingAbility"
        label="Spellcasting Ability"
        size="small"
      />

      <MagicStat gridArea="spellSaveAC" name="Spell Save AC" value="13" />
      <MagicStat
        gridArea="spellAttackBonus"
        name="Spell Attack Bonus"
        value="+3"
      />
    </Heading>

    <TextAreaField gridArea="cantrips" label="Cantrips" />

    <MagicSpells gridArea="spellLevel1" />
    <MagicSpells gridArea="spellLevel2" />
  </Magic>
)

export default MagicPageA
