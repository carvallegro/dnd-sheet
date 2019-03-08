import React from 'react'
import PropTypes from 'prop-types'
import { Name, Value, ValueWrapper, Wrapper } from './styles'

const Money = ({ justifySelf, name, value }) => (
  <Wrapper justifySelf={justifySelf}>
    <Name>{name}</Name>
    <ValueWrapper>
      <Value>{value}</Value>
    </ValueWrapper>
  </Wrapper>
)

Money.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}

Money.defaultProps = {
  justifySelf: 'inherit'
}

export default Money
