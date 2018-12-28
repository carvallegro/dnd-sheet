import _ from 'lodash'
import React from 'react'
import styled from 'styled-components'
import Checkbox from '../inputs/checkbox'
import { Attribute, SkillLineWrapper, SkillName, SkillValue } from './styles'

export const SkillLine = ({ name, attribute }) => (
  <SkillLineWrapper>
    <Checkbox name={_.snakeCase(`skill-${name}`)} />
    <SkillValue>7</SkillValue>
    <SkillName>{name}</SkillName>
    <Attribute>{attribute}</Attribute>
  </SkillLineWrapper>
)

export const SkillGrid = styled.div`
  display: grid;
  grid-row-gap: 0.2rem;
  grid-auto-flow: column;
  grid-template-rows: repeat(6, 1fr);
  grid-auto-columns: auto;
`
