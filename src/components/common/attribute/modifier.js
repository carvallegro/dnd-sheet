import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ShieldSvg from './shield.svg'
import { fonts } from '../../../styles'

const Wrapper = styled.div`
  position:relative;
  width: 100%;
  height: 100%;
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
  text-align: center;
  font-family: ${fonts.input};
  font-size: 20pt;
`

export default () => <Wrapper>
  <Value>+2</Value>
  <Outline src={ShieldSvg}/>
</Wrapper>
