import React from 'react'
import PropTypes from 'prop-types'

import { colors } from '@styles'
import classes from '@enums/classes'

import { ClassIconWrapper } from './styles'

import { ReactComponent as Barbarian } from './images/Barbarian.svg'
import { ReactComponent as Bard } from './images/Bard.svg'
import { ReactComponent as Cleric } from './images/Cleric.svg'
import { ReactComponent as Druid } from './images/Druid.svg'
import { ReactComponent as Fighter } from './images/Fighter.svg'
import { ReactComponent as Monk } from './images/Monk.svg'
import { ReactComponent as Paladin } from './images/Paladin.svg'
import { ReactComponent as Ranger } from './images/Ranger.svg'
import { ReactComponent as Rogue } from './images/Rogue.svg'
import { ReactComponent as Sorcerer } from './images/Sorcerer.svg'
import { ReactComponent as Warlock } from './images/Warlock.svg'
import { ReactComponent as Wizard } from './images/Wizard.svg'

const getImage = className => {
  switch (className) {
    case classes.BARBARIAN:
      return <Barbarian/>
    case classes.BARD:
      return <Bard/>
    case classes.CLERIC:
      return <Cleric/>
    case classes.DRUID:
      return <Druid/>
    case classes.FIGHTER:
      return <Fighter/>
    case classes.MONK:
      return <Monk/>
    case classes.PALADIN:
      return <Paladin/>
    case classes.RANGER:
      return <Ranger/>
    case classes.ROGUE:
      return <Rogue/>
    case classes.SORCERER:
      return <Sorcerer/>
    case classes.WARLOCK:
      return <Warlock/>
    case classes.WIZARD:
      return <Wizard/>
    default:
      return <Paladin/>
  }
}

const ClassIcon = ({ classEnum, color, height }) => (
  <ClassIconWrapper color={color} height={height}>
    {getImage(classEnum)}
  </ClassIconWrapper>
)

ClassIcon.propTypes = {
  classEnum: PropTypes.oneOf(Object.values(classes)),
  color: PropTypes.oneOf(Object.values(colors)),
  height: PropTypes.string
}

ClassIcon.defaultProps = {
  height: '100%'
}

export default ClassIcon
