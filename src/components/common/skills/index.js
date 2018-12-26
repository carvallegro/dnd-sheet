import React from 'react'
import styled from 'styled-components'
import Checkbox from '../inputs/checkbox'
import { DottedBorderStyle, fonts } from '../../../styles'

const SkillLineWrapper = styled.div`
  display: flex;
`

const SkillValue = styled.p`
  ${DottedBorderStyle}
  margin: 0;
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
  opacity: 0.8;
`

export const SkillLine = ({ name, attribute }) => (
  <SkillLineWrapper>
    <Checkbox />
    <SkillValue>7</SkillValue>
    <SkillName>{name}</SkillName>
    <Attribute>{attribute}</Attribute>
  </SkillLineWrapper>
)
