import styled from 'styled-components'
import { fonts, fontSizes } from '@styles'

export const Table = styled.table`
  width: 100%;
`
export const THead = styled.thead``
export const TBody = styled.tbody``
export const TR = styled.tr``
export const TH = styled.th`
  font-family: ${fonts.display};
  font-weight: normal;
  font-size: ${fontSizes.small};
  text-align: left;
`
export const TD = styled.td`
  font-family: ${fonts.input};
`
export const WeaponDescription = styled(TD)`
  font-size: ${fontSizes.small};
  font-style: italic;
`
export const WeaponName = styled.div`
  vertical-align: middle;
`

export const WeaponNameLine = styled.div`
   display: grid;
  grid-template-columns: auto auto;
  justify-content: flex-start;
  align-items: center;
  grid-column-gap: 0.2rem;
  
`
