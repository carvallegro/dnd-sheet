import React from 'react'
import Label from '../common/typography/label'
import { SkillLine } from '../common/skill-line'
import { GridArea } from '../common/layout'
import { SkillGrid } from '../common/skill-line/index'

const MOCK_SKILLS = [
  { name: 'Acrobatics', attribute: 'Dex' },
  { name: 'Athletics', attribute: 'Str' },
  { name: 'Animal Handling', attribute: 'Wis' },
  { name: 'Arcana', attribute: 'Int' },
  { name: 'Deception', attribute: 'Cha' },
  { name: 'History', attribute: 'Int' },
  { name: 'Insight', attribute: 'Wis' },
  { name: 'Intimidation', attribute: 'Cha' },
  { name: 'Investigation', attribute: 'Int' },
  { name: 'Medicine', attribute: 'Wis' },
  { name: 'Nature', attribute: 'Int' },
  { name: 'Perception', attribute: 'Wis' },
  { name: 'Performance', attribute: 'Cha' },
  { name: 'Persuasion', attribute: 'Cha' },
  { name: 'Religion', attribute: 'Int' },
  { name: 'Sleight of Hand', attribute: 'Dex' },
  { name: 'Stealth', attribute: 'Dex' },
  { name: 'Survival', attribute: 'Wis' }
]

const Skills = ({ gridArea }) => (
  <GridArea gridArea={gridArea}>
    <Label>Skills</Label>
    <SkillGrid>
      {MOCK_SKILLS.map(skill => (
        <SkillLine attribute={skill.attribute} key={skill.name} name={skill.name}/>
      ))}
    </SkillGrid>
  </GridArea>
)

export default Skills
