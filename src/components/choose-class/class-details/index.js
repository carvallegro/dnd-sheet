import _ from 'lodash'
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { abilityColors, colors, fontSizes, SIZES } from '@styles'
import { PageWrapper } from '@components/layout'
import Tag from '@common/tag'
import InputField from '@common/fields/input-field'
import { DisplayText } from '@common/typography'
import { MAX_LEVEL } from '@redux/general/constants'
import TagField from '@common/fields/tag-field'

const LevelHeaderWrapper = styled.div`
  //display: flex;
  //justify-content: flex-start;
  //align-items: center;
  
  display: grid;
  grid: auto-flow / repeat(4, auto);
  justify-content: flex-start;
  align-items: flex-end;
  grid-gap: 0.4rem;
`
export const LevelHeader = ({ children }) => (
  <LevelHeaderWrapper>{children}</LevelHeaderWrapper>
)

export const LevelWrapper = styled.div`
  text-align: center;
  
  h1{
    margin: 0;
    line-height: 1;
  }
  
  small {
    font-size: ${fontSizes.medium};
    font-weight: normal;
    line-height: 1;
  }
`

export const LevelTitle = ({ children }) => (
  <LevelWrapper>
    <small>Level</small>
    <h1>
      {children}
    </h1>
  </LevelWrapper>
)

export const SubTitleLevelWrapper = styled.div`
  display: flex;
  line-height: 1;
`

export const SubTitleLevelLabel = styled.label`
   font-size: ${fontSizes.medium};
`

export const SubTitleLevel = ({ value, label }) => (
  <SubTitleLevelWrapper>
    <DisplayText noMargin as='h2'>{value}</DisplayText>
    <SubTitleLevelLabel>{label}</SubTitleLevelLabel>
  </SubTitleLevelWrapper>
)

const Level = ({ level }) => (
  <div>
    <LevelHeader>
      <LevelTitle>{level.level}</LevelTitle>
      <SubTitleLevel value={2} label="Proficiency Bonus"/>
      <SubTitleLevel value={2} label="Rage count"/>
    </LevelHeader>
    <p>Class levels: {JSON.stringify(level.classLevel)}</p>
    <p>Spell casting: {JSON.stringify(level.spellcasting)}</p>
  </div>
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

const createLevelObjects = (classLevels, spellcasting) => _(Array(MAX_LEVEL))
  .fill({})
  .map((v, i) => ({ level: i + 1 }))
  .map(v => ({
    ...v,
    classLevel: _(classLevels).find({ level: v.level }),
    spellcasting: _(spellcasting).find({ level: v.level })
  }))
  .reject(level => _.isNil(level.classLevel) && _.isNil(level.spellcasting))
  .value()

export const ClassDetails = ({ classDetail, classLevels, spellcasting }) => {
  const levels = createLevelObjects(classLevels, spellcasting)

  return (
    <PageWrapper>
      <DisplayText as="h1">{classDetail.name}</DisplayText>
      <DisplayText>{classDetail.description}</DisplayText>
      <InputField label="Hit die" value={`d${classDetail.hit_die}`} readOnly/>
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
        options={p.from.map(c => ({ value: c.id, label: c.name }))}
      />)}

      {levels.map(level => (
        <Level level={level}/>
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
