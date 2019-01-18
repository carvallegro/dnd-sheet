import React from 'react'
import { Name, Value, ValueWrapper, Wrapper } from './styles'

const Money = ({ justifySelf, name, value }) => (
  <Wrapper justifySelf={justifySelf}>
    <Name>{name}</Name>
    <ValueWrapper>
      <Value>{value}</Value>
    </ValueWrapper>
  </Wrapper>
)

Money.defaultProps = {
  justifySelf: 'inherit'
}

export default Money
