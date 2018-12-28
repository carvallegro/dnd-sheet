import styled from 'styled-components'
import { fonts, fontSizes } from '../../../styles'
import Outline from './money_outline.svg'

export const Wrapper = styled.div`
  justify-self: ${({ justifySelf }) => justifySelf};
  height: 4rem;
  width: 4.4rem;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: stretch;
`

// TODO: Make input
export const Name = styled.h3`
  flex-shrink: 0;
  margin: 0;
  font-family: ${fonts.display};
  font-size: ${fontSizes.small};
  font-weight: bold;
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
  line-height: 2.2;
  text-align: center;
`
