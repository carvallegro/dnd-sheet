import React from 'react'
import styled from 'styled-components'

import SubShield from './sub_shield.svg'
import { fonts } from '@styles'

const Wrapper = styled.div`
  position: relative;
`

const Outline = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`

const Value = styled.p`
  margin: 0;
  padding-bottom: 0.2rem;
  text-align: center;
  font-family: ${fonts.input};
  font-size: 1.2rem;
  line-height: 1.25;
`

export default ({ value }) => (
  <Wrapper>
    <Value>{value}</Value>
    <Outline src={SubShield} />
  </Wrapper>
)
