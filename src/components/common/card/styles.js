import styled from 'styled-components'
import {rgba} from 'polished'
import { colors, fonts } from '@styles'

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};
  border: 1px solid ${rgba(colors['brownish-grey'], 0.4)};
`
export const CardTitle = styled.p`
  margin: 0;
  padding: 0.4rem;
  font-family: ${fonts.display};
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme.textColor};
`
export const CardBody = styled.div`
  padding: 1rem 1.2rem;
`
