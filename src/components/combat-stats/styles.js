import styled from 'styled-components'

import { colors } from '../../styles'
import Label from '../common/typography/label'

export const StatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`
export const StatLabel = styled(Label)`
  font-weight: bold;
  margin-bottom: 0.6rem;
`
export const StatOutline = styled.div`
  flex-grow: 1;
  border: 2px solid ${colors.black};
  padding: 0.4rem;
`
