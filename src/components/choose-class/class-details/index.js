import _ from 'lodash'
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { abilityColors, colors, SIZES } from '@styles'
import { PageWrapper } from '@components/layout'
import Tag from '@common/tag'
import InputField from '@common/fields/input-field'
import { DisplayText } from '@common/typography'
import { MAX_LEVEL } from '@redux/general/constants'
import TagField from '@common/fields/tag-field'

export const LevelWrapper = styled.div`
  text-align: center;
`

export const LevelTitle = ({ children }) => (
  <LevelWrapper>
    <DisplayText>Level</DisplayText>
    <DisplayText>{children}</DisplayText>
  </LevelWrapper>
)

export const SubLevelWrapper = styled.div`
  display: flex;
`

export const SubLevel = ({ value, label }) => (
  <SubLevelWrapper>
    <DisplayText>{value}</DisplayText>
    <DisplayText>{label}</DisplayText>
  </SubLevelWrapper>
)

const LevelHeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`
export const LevelHeader = ({ children }) => (
  <LevelHeaderWrapper>{children}</LevelHeaderWrapper>
)

const ProficienciesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  
  * {
  margin-right: .4rem;
  }
`

const Level = ({ level }) => (
  <div>
    <LevelHeader>
      <LevelTitle>{level.level}</LevelTitle>
      <SubLevel value={2} label="Proficiency Bonus" />
      <SubLevel value={2} label="Rage count" />
    </LevelHeader>
    <p>Class levels: {JSON.stringify(level.classLevel)}</p>
    <p>Spell casting: {JSON.stringify(level.spellcasting)}</p>
  </div>
)

export const ClassDetails = ({ classDetail, classLevels, spellcasting }) => {
  const levels = _(Array(MAX_LEVEL))
    .fill({})
    .map((v, i) => ({ level: i + 1 }))
    .map(v => ({ classLevel: _(classLevels).find({ level: v.level }) }))
    .map(v => ({
      ...v,
      spellcasting: _.find(spellcasting, { level: v.level })
    }))
    .reject(level => _.isNil(level.classLevel) && _.isNil(level.spellcasting))
    .value()
  console.log('levels')
  console.log(levels)
  return (
    <PageWrapper>
      <DisplayText as="h1">{classDetail.name}</DisplayText>
      <DisplayText>{classDetail.description}</DisplayText>
      <InputField label="Hit die" value={`d${classDetail.hit_die}`} readOnly />
      <p>
        Saving Throws:
        {classDetail.saving_throws.map(p => (
          <Tag key={p.id} color={abilityColors[p.name]}>
            {p.name}
          </Tag>
        ))}{' '}
      </p>

      <DisplayText as="h3">Proficiencies</DisplayText>

      <ProficienciesWrapper>
        {classDetail.proficiencies.map(pr => (
          <Tag as='div' color={colors.white} darkText size={SIZES.small}>{pr.name}</Tag>
        ))}
      </ProficienciesWrapper>

        {classDetail.proficiency_choices.map(p => <TagField
          label={`Choose ${p.choose} from`}
          options={p.from.map(c => ({value: c.id, label: c.name}))}
        />)}

      <DisplayText as="h2">Leveling Up</DisplayText>
      {levels.map(level => (
        <Level level={level} />
      ))}
    </PageWrapper>
  )
}

ClassDetails.propTypes = {
  classDetail: PropTypes.object.isRequired,
  classLevels: PropTypes.array.isRequired,
  spellcasting: PropTypes.array.isRequired
}

export default ClassDetails
