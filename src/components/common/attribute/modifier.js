import React from 'react'
import styled from 'styled-components'

import ShieldSvg from './shield.svg'
import { fonts } from '@styles'
import { Wrapper } from './styles'

const Outline = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`

const Value = styled.p`
  margin: 0;
  text-align: center;
  font-family: ${fonts.input};
  font-size: 2rem;
`

export default ({ value }) => (
  <Wrapper>
    <Value>{value > 0 ? `+${value}` : `${value}`}</Value>
    <Outline src={ShieldSvg} />
  </Wrapper>
)
