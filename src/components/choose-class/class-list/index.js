import React from 'react'

import { classColors } from '@styles'
import { PageWrapper } from '@components/layout'
import ClassIcon from '@components/class-icon'

import { ClassListTitle, ClassListWrapper, ClassWrapper } from './/styles'

const ClassButton = ({ c, onClick }) => (
  <ClassWrapper onClick={() => onClick(c.index)}>
    <ClassIcon
      classEnum={c.name.toUpperCase()}
      color={classColors[c.name.toUpperCase()]}
      height="4rem"
    />
    <div>{c.name}</div>
  </ClassWrapper>
)
export const ClassList = ({ classes, onClick }) => (
  <PageWrapper>
    <ClassListTitle>Choose a Class</ClassListTitle>
    <ClassListWrapper>
      {classes.map(c => (
        <ClassButton key={c.index} c={c} onClick={onClick} />
      ))}
    </ClassListWrapper>
  </PageWrapper>
)
