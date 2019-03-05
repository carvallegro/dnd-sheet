import _ from 'lodash'
import React from 'react'
import { connect } from 'react-redux'

import { SkillLine } from '@common/skill-line'
import { SkillGrid } from '@common/skill-line/index'

import { setProficiency } from '@redux/skills/actions'

const Skills = ({
  gridArea,
  skills,
  attributes,
  proficiencyBonus,
  setProficiency
}) => (
  <SkillGrid gridArea={gridArea}>
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

const mapStateToProps = state => ({
  skills: state.skills,
  attributes: state.attributes,
  proficiencyBonus: state.general.proficiencyBonus
})

export const mapDispatchToProps = dispatch => ({
  setProficiency: (skill, isProficient) =>
    dispatch(setProficiency(skill, isProficient))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Skills)
