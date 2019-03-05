import React from 'react'
import styled from 'styled-components'

import PageTitle from '@common/typography/index'
import TextAreaField from '@common/fields/textarea-field'
import InputField from '@common/fields/input-field'
import MagicStat from '@common/magic-stat/index'
import MagicSpells from '@common/magic-spells/index'
import { Page } from '@common/layout/index'
import Spell from '@common/magic-spells/spell'

import { Heading } from './styles'

export const Magic = styled(Page)`
  grid-template:
    'heading heading heading heading heading heading' 8rem
    'cantrips cantrips cantrips cantrips cantrips cantrips ' 15rem
    'spellLevel1 spellLevel1 spellLevel1 spellLevel2 spellLevel2 spellLevel2' auto
    / 1fr 1fr 1fr 1fr 1fr 1fr;
`

const TEST = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

const MagicPageA = ({ id, gridArea }) => (
  <Magic id={id} gridArea={gridArea}>
    <Heading>
      <PageTitle>Magic</PageTitle>
      <InputField
        gridArea="characterName"
        label="Character Name"
        size="small"
      />

      <InputField
        gridArea="spellcastingClass"
        label="Spellcasting Class"
        size="large"
      />
      <InputField
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

    <MagicSpells
      gridArea="spellLevel1"
      spellLevel={1}
      slotTotal={4}
      slotExtended={2}
    >
      {TEST.map(v => (
        <Spell key={v} />
      ))}
    </MagicSpells>
    <MagicSpells
      gridArea="spellLevel2"
      spellLevel={2}
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
