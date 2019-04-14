import _ from 'lodash'
import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'

import { abilityColors, colors } from '@styles'
import { greyTheme } from '@styles/theme'
import { PageWrapper } from '@components/layout'

import { ClassList } from './class-list'
import connect from './connect'
import InputField from '@common/fields/input-field'
import Tag from '@common/tag'
import { BodyText, DisplayText } from '@common/typography'

const Wrapper = styled.section`
  background-color: ${colors.darkGrey}
  padding: 2rem;
  color: ${({ theme }) => theme.textColor};
`

const ClassDetails = ({ classDetail }) => (
  <PageWrapper>
    <DisplayText as="h1">{classDetail.name}</DisplayText>
    <DisplayText>{classDetail.description}</DisplayText>
    <InputField label="Hit die" value={`d${classDetail.hit_die}`} readOnly />
    <p>
      Saving Throws:{' '}
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
    <p>Spell casting: {JSON.stringify(classDetail.spellcasting)}</p>
  </PageWrapper>
)

const ChooseClass = ({ classes = [] }) => {
  const [chosenClassId, chooseClass] = useState()
  return (
    <ThemeProvider theme={greyTheme}>
      <Wrapper>
        {!chosenClassId && (
          <ClassList classes={classes} onClick={chooseClass} />
        )}
        {chosenClassId && (
          <ClassDetails
            classDetail={_.find(classes, { index: chosenClassId })}
          />
        )}
      </Wrapper>
    </ThemeProvider>
  )
}

export default connect(ChooseClass)
