import { PageWrapper } from '@components/layout'
import { DisplayText } from '@common/typography'
import InputField from '@common/fields/input-field'
import Tag from '@common/tag'
import { abilityColors } from '@styles'
import _ from 'lodash'
import React from 'react'

export const ClassDetails = ({ classDetail, classLevels, spellcasting }) => (
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
    <InputField
      label="Proficiencies"
      value={_(classDetail.proficiencies)
        .map('name')
        .join(', ')}
      readOnly
    />

    <DisplayText as="h3">Customization</DisplayText>
    <p>
      Proficiency choices: {JSON.stringify(classDetail.proficiency_choices)}
    </p>
    <p>Class levels: {JSON.stringify(classLevels)}</p>
    <p>Spell casting: {JSON.stringify(spellcasting)}</p>
  </PageWrapper>
)
