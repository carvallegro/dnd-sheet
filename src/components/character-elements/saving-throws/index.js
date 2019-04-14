import _ from 'lodash'
import React from 'react'
import { connect } from 'react-redux'
import { SkillGrid, SkillLine } from '@common/skill-line/index'
import { setProficiency } from '@redux/attributes/actions'
import { attributesNameEnum } from '@enums/attributes'

const SavingThrows = ({
  attributes,
  proficiencyBonus,
  setProficiency,
  gridArea,
  rows
}) => (
  <SkillGrid gridArea={gridArea} rows={rows}>
    {_.flatMap(attributes, (v, k) => (
      <SkillLine
        key={k}
        name={_.capitalize(attributesNameEnum[v.name])}
        isProficient={v.isProficient}
        value={v.modifier + (v.isProficient ? proficiencyBonus : 0)}
        onProficiencyChange={isProficient => setProficiency(k, isProficient)}
      />
    ))}
  </SkillGrid>
)

const mapStateToProps = state => ({
  attributes: state.attributes,
  proficiencyBonus: state.general.proficiencyBonus
})

const mapDispatchToProps = dispatch => ({
  setProficiency: (attribute, isProficient) =>
    dispatch(setProficiency(attribute, isProficient))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SavingThrows)
