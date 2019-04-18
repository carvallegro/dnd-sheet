import styled from 'styled-components'
import { rgba } from 'polished'
import { colors } from '@styles'

export const Square = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};
  border: 1px solid ${rgba(colors['brownish-grey'], 0.4)};
`
