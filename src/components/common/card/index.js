import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { fonts } from '@styles'

const Wrapper = styled.div`
  padding: 8px;
  background-color: ${({ theme }) => theme.backgroundColor};
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.5);
`

const CardTitle = styled.p`
  margin: 0;
  font-family: ${fonts.display};
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme.textColor};
`

const Card = ({children, title}) =>
  <Wrapper>
    {children}
    <CardTitle>{title}</CardTitle>
  </Wrapper>

Card.propTypes ={
  title: PropTypes.string
}

export default Card
