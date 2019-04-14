import styled from 'styled-components'
import { fonts } from '@styles'

export const ClassListTitle = styled.h1`
  position: relative;

  margin: 0 0 1rem;
  font-family: ${fonts.display};
  font-weight: normal;
  text-align: center;

  &::before {
    content: '';
    position: absolute;
    bottom: -0.6rem;
    left: 0;
    right: 0;

    height: 2px;
    width: 4rem;
    margin: 0 auto;

    background-color: ${({ theme }) => theme.textColor};
  }
`
export const ClassListWrapper = styled.div`
  display: grid;
  grid: auto-flow / repeat(4, auto);
  grid-gap: 2rem;
  grid-row-gap: 1.2rem;
  align-items: center;
  justify-content: center;
`
export const ClassWrapper = styled.div`
  display: grid;
  grid-template-columns: 3rem auto;
  align-items: center;
  grid-column-gap: 0.2rem;

  border: none;
  background: none;
  cursor: pointer;

  color: ${({ theme }) => theme.textColor};
  font-family: ${fonts.display};
  font-size: 1.4rem;
  font-variant: small-caps;

  opacity: 0.5;

  &:hover {
    opacity: 1;
  }
`
