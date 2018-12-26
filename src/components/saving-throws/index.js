import React from 'react'
import styled from 'styled-components'
import Label from '../common/typography/label'
import { SkillLine } from '../common/skills'
import { GridArea } from '../common/layout'

const MOCK_ATTR = [
  'Strength',
  'Dexterity',
  'Constitution',
  'Intelligence',
  'Wisdom',
  'Charisma'
]

const SavingThrows = ({ gridArea }) => (
  <GridArea gridArea={gridArea}>
    <Label>Saving Throws</Label>
    {MOCK_ATTR.map(attr => (
      <SkillLine name={attr} />
    ))}
  </GridArea>
)

export default SavingThrows
