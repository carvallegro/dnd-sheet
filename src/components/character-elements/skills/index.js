import React from 'react'
import { SkillLine } from '@common/skill-line'
import { GridArea } from '@common/layout'
import { SkillGrid } from '@common/skill-line/index'
import { connect } from 'react-redux'

const Skills = ({ gridArea, skills }) => (
  <SkillGrid>
    {skills.map(skill => (
      <SkillLine
        attribute={skill.attribute}
        key={skill.name}
        name={skill.name}
      />
    ))}
  </SkillGrid>
)

const mapStateToProps = state => ({
  skills: state.skills
})

export default connect(mapStateToProps)(Skills)
