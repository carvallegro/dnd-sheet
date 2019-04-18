import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { colors, SIZES as sizes } from '@styles'
import Checkbox from '@common/fields/checkbox'
import Tag from '@common/tag'
import { damageTypes } from '@enums/damage-types'
import equippedHandEnum from '@enums/equipped-hand'

import {
  Table,
  TBody,
  TD,
  TH,
  THead,
  TR,
  WeaponName,
  WeaponDescription
} from './styles'
import { WeaponNameLine } from '@components/weapon-table/styles'

const handToColor = {
  [equippedHandEnum.MAIN]: colors.purple,
  [equippedHandEnum.OFF]: colors.blue,
  [equippedHandEnum.DUAL]: colors['brownish-grey']
}
const EquippedTag = ({ equippedHand }) => (
  <Tag as='span' color={handToColor[equippedHand]}>{equippedHand}</Tag>
)

const WeaponLine = ({
  isProficient,
  weaponName,
  equipped,
  attackBonus,
  damage,
  damageType,
  description
}) => (
  <Fragment>
    <TR>
      <TD>
        <Checkbox
          name="weapon-proficiency"
          size={sizes.small}
          checked={isProficient}
        />
      </TD>
      <TD>
        <WeaponNameLine>
          <WeaponName>{weaponName}</WeaponName>{' '}
          {equipped && <EquippedTag equippedHand={equipped} />}
        </WeaponNameLine>
      </TD>
      <TD>{attackBonus}</TD>
      <TD>
        {damage} {damageType}
      </TD>
    </TR>
    <TR>
      <TD />
      <WeaponDescription colSpan="3">{description}</WeaponDescription>
    </TR>
  </Fragment>
)

WeaponLine.propsType = {
  isProficient: PropTypes.bool,
  weaponName: PropTypes.string.isRequired,
  equippedHand: PropTypes.oneOf(equippedHandEnum),
  attackBonus: PropTypes.string.isRequired,
  damage: PropTypes.string.isRequired,
  damageType: PropTypes.oneOf(Object.values(damageTypes)),
  description: PropTypes.string
}

const TEST_TABLE = [
  {
    isProficient: true,
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

export const WeaponTable = ({ weapons }) => (
  <Table>
    <THead>
      <TR>
        <TH>Prof.</TH>
        <TH>Name</TH>
        <TH>Attack Bonus</TH>
        <TH>Damage</TH>
      </TR>
    </THead>
    <TBody>
      {weapons.map((w, i) => (
        <WeaponLine key={i} {...w} />
      ))}
    </TBody>
  </Table>
)

WeaponTable.propTypes = {
  weapons: PropTypes.array
}

WeaponTable.defaultProps = {
  weapons: TEST_TABLE
}
export default WeaponTable
