import PropTypes from 'prop-types'
import styled from 'styled-components'

import { SIZES, fontSizes } from '@styles'

export const Label = styled.label`
  font-family: Lora;
  font-size: ${({ size }) => fontSizes[size]};
  text-align: ${({ align }) => align};
  color: ${({ theme }) => theme.textColor};
`

Label.propTypes = {
  align: PropTypes.oneOf(['left', 'right']),
  size: PropTypes.oneOf(Object.values(SIZES))
}

Label.defaultProps = {
  align: 'left',
  size: SIZES.medium
}

export default Label
