import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'

import WeaponTable from './index'
import equippedHand from '@enums/equipped-hand'

const Wrapper = styled.div`
  width: 800px;
`

const STORY_TABLE = [
  {
    isProficient: true,
    equipped: equippedHand.MAIN,
    weaponName: 'Sun Blade',
    attackBonus: '+6',
    damage: '1d8+4',
    damageType: 'Radiant',
    description: `Finesse +1d8 damage when hitting Undead, Bonus action to create the blade,
        Sunlight: emits bright light in a 15-foot radius and dim light for an additional 15 feet, expand or reduce its
        radius of bright and dim light by 5 feet each, to a maximum of 30 feet each or a minimum of 10 feet each. -less`
  },
  {
    isProficient: true,
    equipped: equippedHand.OFF,
    weaponName: 'Moon Blade',
    attackBonus: '+6',
    damage: '1d8+2',
    damageType: 'Slashing',
    description: `Finesse, +1d8 damage when hitting Undead, Bonus action to create the blade +more`
  },
  {
    isProficient: true,
    weaponName: 'Light hammer',
    attackBonus: '+4',
    damage: '1d4+2',
    damageType: 'Bludgeoning',
    description: 'Light, thrown (range 20/60)'
  },
  {
    isProficient: false,
    weaponName: 'Blowgun',
    attackBonus: '+1',
    damage: '1+4',
    damageType: 'Piercing',
    description: 'Ammunition (range 100/400), loading'
  }
]

storiesOf('Weapon Table', module).add('default', () => (
  <Wrapper>
    <WeaponTable weapons={STORY_TABLE} />
  </Wrapper>
))
