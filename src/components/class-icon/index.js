import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import classes from '../../enums/classes'

import Bard from './images/Bard.svg'
import Barbarian from './images/Barbarian.svg'
import Cleric from './images/Cleric.svg'
import Druid from './images/Druid.svg'
import Fighter from './images/Fighter.svg'
import Monk from './images/Monk.svg'
import Paladin from './images/Paladin.svg'
import Ranger from './images/Ranger.svg'
import Rogue from './images/Rogue.svg'
import Sorcerer from './images/Sorcerer.svg'
import Warlock from './images/Warlock.svg'
import Wizard from './images/Wizard.svg'

const getImage = className => {
  switch (className) {
    case classes.BARBARIAN:
      return Barbarian
    case classes.BARD:
      return Bard
    case classes.CLERIC:
      return Cleric
    case classes.DRUID:
      return Druid
    case classes.FIGHTER:
      return Fighter
    case classes.MONK:
      return Monk
    case classes.PALADIN:
      return Paladin
    case classes.RANGER:
      return Ranger
    case classes.ROGUE:
      return Rogue
    case classes.SORCERER:
      return Sorcerer
    case classes.WARLOCK:
      return Warlock
    case classes.WIZARD:
      return Wizard
    default:
      return Paladin
  }
}

const ClassIconImg = styled.img`
  height: 100%;
  grid-row: span 2;
  justify-self: center;
  opacity: 0.6;
`

const ClassIcon = props => <ClassIconImg src={getImage(props.classEnum)} />

ClassIcon.props = {
  classEnum: PropTypes.oneOf(Object.values(classes))
}

export default ClassIcon
