import React from 'react'
import styled from 'styled-components'

import connect from './connect'
import Attributes from './component'

export default connect(Attributes)

export const AttributesWrapper = styled.div`
  grid-area: attributes;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
