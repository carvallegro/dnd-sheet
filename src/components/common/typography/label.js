import PropTypes from 'prop-types'
import styled from 'styled-components'

import { sizes, fontSizes } from '../../../styles'

export const Label = styled.label`
  font-family: Lora;
  font-size: ${({size}) => fontSizes[size]};
  text-align: ${({align}) => align};
`

Label.propTypes = {
  align: PropTypes.oneOf(['left', 'right']),
  size: PropTypes.oneOf(Object.values(sizes))
}

Label.defaultProps = {
  align: 'left',
  size: sizes.medium
}

export default Label
