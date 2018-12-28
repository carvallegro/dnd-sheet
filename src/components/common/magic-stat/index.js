import React from 'react'
import { Name, Value, ValueWrapper, Wrapper } from './styles'

const MagicStat = ({ gridArea, justifySelf, name, value }) => (
  <Wrapper gridArea={gridArea} justifySelf={justifySelf}>
    <ValueWrapper>
      <Value>{value}</Value>
    </ValueWrapper>
    <Name>{name}</Name>
  </Wrapper>
)

MagicStat.defaultProps = {
  justifySelf: 'inherit'
}

export default MagicStat
