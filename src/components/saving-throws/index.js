import React from 'react'
import styled from 'styled-components'
import Label from '../common/typography/label'
import { SkillGrid, SkillLine } from '../common/skill-line'
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
    <SkillGrid>
      {MOCK_ATTR.map(attr => (
        <SkillLine name={attr} key={attr} />
      ))}
    </SkillGrid>
  </GridArea>
)

export default SavingThrows
