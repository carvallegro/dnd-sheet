import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Modifier from './modifier'
import Value from './value'
import { fonts } from '../../../styles'

const AttributeWrapper = styled.div`
  position: relative;
  width: 4rem;
  height: 5.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const AttributeName = styled.p`
  margin: 0 0 0.2rem;
  font-family: ${fonts.display};
  font-size: 0.8rem;
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

export default () => (
  <AttributeWrapper>
    <AttributeName>CONSTITUTION</AttributeName>
    <Modifier />
    <ValueWrapper>
      <Value />
    </ValueWrapper>
  </AttributeWrapper>
)
