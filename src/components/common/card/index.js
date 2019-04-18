import React from 'react'
import PropTypes from 'prop-types'
import { CardTitle } from './styles'
import { Square } from '@common/shapes'

const Card = ({ children, title }) => (
  <Square>
    {children}
    {title && <CardTitle>{title}</CardTitle>}
  </Square>
)

Card.propTypes = {
  title: PropTypes.string
}

export default Card
