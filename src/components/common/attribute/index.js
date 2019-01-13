import React from 'react'

import Modifier from './modifier'
import Value from './value'
import { AttributeName, AttributeWrapper, ValueWrapper } from './styles'

const Attribute = ({ name, value, modifier }) =>
  <AttributeWrapper>
    <AttributeName>{name}</AttributeName>
    <Modifier value={modifier}/>
    <ValueWrapper>
      <Value value={value}/>
    </ValueWrapper>
  </AttributeWrapper>

export default Attribute
