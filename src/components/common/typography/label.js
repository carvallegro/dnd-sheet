import PropTypes from 'prop-types'
import styled from 'styled-components'

import { sizes, fontSizes } from '../../../styles'

export const Label = styled.label`
  font-family: Lora;
  font-size: ${({size}) => fontSizes.point[size]};
`

Label.propTypes = {
  size: PropTypes.oneOf(Object.values(sizes))
}

Label.defaultProps = {
  size: sizes.medium
}

export default Label
