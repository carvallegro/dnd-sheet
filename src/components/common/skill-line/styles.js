import styled from 'styled-components'
import { DottedBorderStyle, fonts } from '@styles'

export const SkillLineWrapper = styled.div`
  display: flex;
  align-items: center;
`
export const SkillValue = styled.p`
  ${DottedBorderStyle}
  margin: 0 0.3rem;
  width: 1.2rem;
  font-family: ${fonts.input};
  text-align: center;
`
export const SkillName = styled.p`
  margin: 0;
  font-family: ${fonts.display};
  font-size: 0.8rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
export const Attribute = styled(SkillName)`
  margin-left: 0.1rem;
  opacity: 0.75;
`
