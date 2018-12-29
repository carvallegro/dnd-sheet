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
    'spellLevel3 spellLevel3 spellLevel3 spellLevel3 spellLevel3 spellLevel3' auto
    'spellLevel4 spellLevel4 spellLevel4 spellLevel4 spellLevel4 spellLevel4' auto
    'spellLevel5 spellLevel5 spellLevel5 spellLevel5 spellLevel5 spellLevel5' auto
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

    <MagicSpells gridArea="spellLevel3" />
    <MagicSpells gridArea="spellLevel4" />
    <MagicSpells gridArea="spellLevel5" />
  </Magic>
)

export default MagicPageA
