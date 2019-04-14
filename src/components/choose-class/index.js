import _ from 'lodash'
import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

import { colors } from '@styles'
import { greyTheme } from '@styles/theme'

import { ClassList } from './class-list'
import connect from './connect'
import { ClassDetails } from '@components/choose-class/class-details'

const Wrapper = styled.section`
  background-color: ${colors.darkGrey}
  padding: 2rem;
  color: ${({ theme }) => theme.textColor};
`

const ChooseClass = ({ classes = [], selectedClass, selectClass, classLevels, spellcasting }) =>
  <ThemeProvider theme={greyTheme}>
    <Wrapper>
      {!selectedClass.index && (
        <ClassList classes={classes} onClick={selectClass}/>
      )}
      {selectedClass.index && (
        <ClassDetails
          classDetail={_.find(classes, { index: selectedClass.index })}
          classLevels={classLevels}
          spellcasting={spellcasting}
        />
      )}
    </Wrapper>
  </ThemeProvider>

export default connect(ChooseClass)
