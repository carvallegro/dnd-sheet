// TODO: Make input
import styled from 'styled-components'
import { fonts, fontSizes } from '@styles'
import Outline from './magic-outline.svg'

export const Wrapper = styled.div`
  grid-area: ${({ gridArea }) => gridArea};
  justify-self: ${({ justifySelf }) => justifySelf};
  height: 6.5rem;
  width: 4.4rem;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: stretch;
`
export const Name = styled.h3`
  flex-shrink: 0;
  margin: 0;
  font-family: ${fonts.display};
  font-size: ${fontSizes.small};
  font-weight: normal;
  line-height: 1.6;
  vertical-align: top;
  text-align: center;
`
export const ValueWrapper = styled.div`
  flex-grow: 1;
  position: relative;
  width: 100%;
  max-height: 100%;
  background: url(${Outline}) no-repeat;
  background-size: 100% 100%;
`
export const Value = styled.p`
  margin: 0;
  height: 100%;
  vertical-align: middle;
  font-family: ${fonts.input};
  font-size: 2.4rem;
  line-height: 1.6;
  text-align: center;
`
