import React from 'react'
import { StatLabel, StatValue, StatWrapper, Wrapper } from './styles'

const Stats = () => (
  <Wrapper>
    <StatWrapper>
      <StatValue>0</StatValue>
      <StatLabel>Inspiration</StatLabel>
    </StatWrapper>
    <StatWrapper>
      <StatValue>+1</StatValue>
      <StatLabel>Proficiency Bonus</StatLabel>
    </StatWrapper>
    <StatWrapper>
      <StatValue>20</StatValue>
      <StatLabel>Speed</StatLabel>
    </StatWrapper>
  </Wrapper>
)

export default Stats
