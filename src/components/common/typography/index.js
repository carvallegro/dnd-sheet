import PropTypes from 'prop-types'
import styled from'styled-components'

import {typography} from '../../../styles'

export const PageHeading = styled.h1`
  ${typography.Heading};
  grid-area: ${({gridArea}) => gridArea || 'pageHeading'}
  margin: 0;
`

PageHeading.propStyle = {
  gridArea: PropTypes.string
}

export default PageHeading
