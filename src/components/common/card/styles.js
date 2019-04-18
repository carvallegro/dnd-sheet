import styled from 'styled-components'
import { fonts } from '@styles'

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
