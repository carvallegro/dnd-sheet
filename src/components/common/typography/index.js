import PropTypes from 'prop-types'
import styled from 'styled-components'

import { fonts, typography } from '@styles'

export const PageTitle = styled.h1`
  ${typography.Heading};
  grid-area: ${({ gridArea }) => gridArea || 'pageTitle'}
  margin: 0;
`

PageTitle.propStyle = {
  gridArea: PropTypes.string
}

export const DisplayText = styled.p`
  font-family: ${fonts.display};
`

export const BodyText = styled.p`
  font-family: ${fonts.input};
`

export default PageTitle
