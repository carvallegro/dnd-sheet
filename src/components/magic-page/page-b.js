import React from 'react'
import PageTitle from '../common/typography'
import TextAreaField from '../common/inputs/textarea'
import Input from '../common/inputs/input'
import MagicStat from '../common/magic-stat'
import MagicSpells from '../common/magic-spells'
import { Heading } from './styles'
import styled from 'styled-components'
import { Page } from '../common/layout'
import Spell from '../common/magic-spells/spell'

export const Magic = styled(Page)`
  grid-template:
    'heading heading heading heading heading heading' 8rem
    'spellLevel3 spellLevel3 spellLevel3 spellLevel3 spellLevel3 spellLevel3' auto
    'spellLevel4 spellLevel4 spellLevel4 spellLevel4 spellLevel4 spellLevel4' auto
    'spellLevel5 spellLevel5 spellLevel5 spellLevel5 spellLevel5 spellLevel5' auto
    / 1fr 1fr 1fr 1fr 1fr 1fr;
`

const TEST = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

const MagicPageA = ({ id, gridArea }) => (
  <Magic id={id} gridArea={gridArea}>
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

    <MagicSpells
      gridArea="spellLevel3"
      columns={2}
      spellLevel={3}
      slotTotal={2}
      slotExtended={0}
    >
      {TEST.map(v => (
        <Spell key={v} />
      ))}
    </MagicSpells>
    <MagicSpells
      gridArea="spellLevel4"
      columns={2}
      spellLevel={4}
      slotTotal={2}
      slotExtended={0}
    >
      {TEST.map(v => (
        <Spell key={v} />
      ))}
    </MagicSpells>
    <MagicSpells
      gridArea="spellLevel5"
      columns={2}
      spellLevel={5}
      slotTotal={2}
      slotExtended={0}
    >
      {TEST.map(v => (
        <Spell key={v} />
      ))}
    </MagicSpells>
  </Magic>
)

export default MagicPageA
