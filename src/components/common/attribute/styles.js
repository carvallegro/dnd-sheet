import styled from 'styled-components'
import { fonts } from '../../../styles'

export const AttributeWrapper = styled.div`
  position: relative;
  width: 4rem;
  height: 5.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const AttributeName = styled.p`
  margin: 0 0 0.2rem;
  font-family: ${fonts.display};
  font-size: 0.8rem;
  font-weight: bold;
  text-align: center;
`
export const ValueWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 7%;
  right: 7%;
  margin-bottom: 7%;
`
export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`
