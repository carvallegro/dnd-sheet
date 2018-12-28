import styled from 'styled-components'
import { DottedBorderStyle, fonts } from '../../../styles'

export const SkillLineWrapper = styled.div`
  display: flex;
  align-items: center;
`
export const SkillValue = styled.p`
  ${DottedBorderStyle}
  margin: 0 0.4rem;
  width: 1.4rem;
  font-family: ${fonts.input};
  text-align: center;
`
export const SkillName = styled.p`
  margin: 0;
  font-family: ${fonts.display};
  font-size: 0.8rem;
`
export const Attribute = styled(SkillName)`
  margin-left: 0.2rem;
  opacity: 0.75;
`
