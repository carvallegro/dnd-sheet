import React from 'react'

import Modifier from './modifier'
import Value from './value'
import { AttributeName, AttributeWrapper, ValueWrapper } from './styles'

export default ({ name }) => (
  <AttributeWrapper>
    <AttributeName>{name}</AttributeName>
    <Modifier />
    <ValueWrapper>
      <Value />
    </ValueWrapper>
  </AttributeWrapper>
)
