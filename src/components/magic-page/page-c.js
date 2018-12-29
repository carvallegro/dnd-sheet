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
    'spellLevel6 spellLevel6 spellLevel6 spellLevel6 spellLevel6 spellLevel6' auto
    'spellLevel7 spellLevel7 spellLevel7 spellLevel7 spellLevel7 spellLevel7' auto
    'spellLevel8 spellLevel8 spellLevel8 spellLevel9 spellLevel9 spellLevel9' auto
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

    <MagicSpells gridArea="spellLevel6" />
    <MagicSpells gridArea="spellLevel7" />
    <MagicSpells gridArea="spellLevel8" />
    <MagicSpells gridArea="spellLevel9" />
  </Magic>
)

export default MagicPageA
