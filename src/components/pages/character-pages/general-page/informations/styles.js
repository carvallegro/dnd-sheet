import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 2fr;
  grid-gap: 1rem;
`

export const ClassIcon = styled.img`
  height: 100%;
  grid-row: span 2;
  justify-self: center;
  opacity: 0.6;
`
