import { SkillGrid, SkillLine } from '@common/skill-line'
import _ from 'lodash'
import React from 'react'

export const Skills = ({
  gridArea,
  skills,
  attributes,
  proficiencyBonus,
  setProficiency,
  rows
}) => (
  <SkillGrid rows={rows} gridArea={gridArea}>
    {_.flatMap(skills, (skill, index) => (
      <SkillLine
        attribute={skill.attribute}
        key={skill.name}
        name={skill.name}
        value={
          attributes[skill.attribute].modifier +
          (skill.isProficient ? proficiencyBonus : 0)
        }
        isProficient={skill.isProficient}
        onProficiencyChange={isProficient =>
          setProficiency(index, isProficient)
        }
      />
    ))}
  </SkillGrid>
)

export default Skills
