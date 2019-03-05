import styled from 'styled-components'
import { fonts } from '@styles'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
`
export const StatWrapper = styled.div``
export const StatValue = styled.h2`
  margin: 0 0 0.6rem;
  text-align: center;
  font-size: 3.2rem;
  font-family: ${fonts.input};
  font-weight: bold;
  color: ${({ theme }) => theme.textColor};
`
export const StatLabel = styled.p`
  margin: 0;
  font-size: 1.2rem;
  text-align: center;
  font-family: ${fonts.display};
  color: ${({ theme }) => theme.textColor};
`
