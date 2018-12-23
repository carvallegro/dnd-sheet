import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Modifier from './modifier'
import Value from './value'
import { fonts } from '../../../styles'

const AttributeWrapper = styled.div`
  position: relative;
  width: 40pt;
  height: 54pt;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const AttributeName = styled.p`
  margin: 0 0 2pt;
  font-family: ${fonts.display};
  font-size: 8pt;
  font-weight: bold;
  text-align: center;
`

const ValueWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 7%;
  right: 7%;
  margin-bottom: 7%;
`

export default () => <AttributeWrapper>
  <AttributeName>CONSTITUTION</AttributeName>
  <Modifier />
  <ValueWrapper>
    <Value/>
  </ValueWrapper>
</AttributeWrapper>
