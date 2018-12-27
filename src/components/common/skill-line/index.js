import _ from 'lodash'
import React from 'react'
import styled from 'styled-components'
import Checkbox from '../inputs/checkbox'
import { DottedBorderStyle, fonts } from '../../../styles'

const SkillLineWrapper = styled.div`
  display: flex;
  align-items: center;
`

const SkillValue = styled.p`
  ${DottedBorderStyle}
  margin: 0 0.4rem;
  width: 1.4rem;
  font-family: ${fonts.input};
  text-align: center;
`

const SkillName = styled.p`
  margin: 0;
  font-family: ${fonts.display};
  font-size: 0.8rem;
`

const Attribute = styled(SkillName)`
  margin-left: 0.2rem;
  opacity: 0.75;
`

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
