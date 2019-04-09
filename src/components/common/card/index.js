import React from 'react'
import PropTypes from 'prop-types'
import { CardTitle, Wrapper } from './styles'

const Card = ({ children, title }) => (
  <Wrapper>
    {children}
    {title && <CardTitle>{title}</CardTitle>}
  </Wrapper>
)

Card.propTypes = {
  title: PropTypes.string
}

export default Card
