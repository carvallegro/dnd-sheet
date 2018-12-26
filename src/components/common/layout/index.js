import styled from 'styled-components'
import PropTypes from 'prop-types'

export const Page = styled.div`
  height: 210mm;
  width: 148mm;
  background-color: white;
  padding: 20px;
  display: grid;
  grid-gap: 1rem;
`

export const GridArea = styled.div`
  ${({ gridArea }) => gridArea && `grid-area: ${gridArea};`}
  display: flex;
  flex-direction: column;
`

GridArea.propStyle = {
  gridArea: PropTypes.string
}
