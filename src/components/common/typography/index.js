import PropTypes from 'prop-types'
import styled from 'styled-components'

import { colors, fonts, typography } from '@styles'

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
  font-weight: ${({weight})=> weight || 'initial'};
  color: ${({color}) => color || 'inherit'};
  ${({noMargin}) => noMargin && 'margin: 0;'}
`
DisplayText.propTypes={
  weight: PropTypes.oneOf(['bold', 'normal']),
  color: PropTypes.oneOf(Object.values(colors)),
  noMargin: PropTypes.bool
}

export const BodyText = styled(DisplayText)`
  font-family: ${fonts.input};
`
BodyText.propTypes = DisplayText.propTypes

export default PageTitle
