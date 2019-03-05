import React from 'react'
import PropTypes from 'prop-types'
import { Name, Value, ValueWrapper, Wrapper } from './styles'

const MagicStat = ({ gridArea, justifySelf, name, value }) => (
  <Wrapper gridArea={gridArea} justifySelf={justifySelf}>
    <ValueWrapper>
      <Value>{value}</Value>
    </ValueWrapper>
    <Name>{name}</Name>
  </Wrapper>
)

MagicStat.propTypes = {
  gridArea: PropTypes.string,
  justifySelf: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

MagicStat.defaultProps = {
  justifySelf: 'inherit'
}

export default MagicStat
