import styled from 'styled-components'
import PropTypes from 'prop-types'

import { media } from '../../../styles'

export const DISPLAY_MODE = {
  web: 'web',
  print: 'print'
}

export const GridArea = styled.div`
  ${({ gridArea }) => gridArea && `grid-area: ${gridArea};`}
  display: flex;
  flex-direction: column;
`
GridArea.propStyle = {
  gridArea: PropTypes.string
}

export const Page = styled(GridArea)`
  height: ${({displayMode}) => DISPLAY_MODE.print === displayMode ? '210mm' : 'initial'};
  width: ${({displayMode}) => DISPLAY_MODE.print === displayMode ? '148mm' : 'initial'};
  background-color: white;
  padding: 1rem;
  display: grid;
  grid-gap: 1rem;
  
  ${media.print`
    height: 210mm;
    width: 148mm;
    page-break-after: always;
  `}
  
`

Page.propTypes = {
  displayMode: PropTypes.oneOf(Object.values(DISPLAY_MODE))
}

Page.defaultProps = {
  displayMode: DISPLAY_MODE.web
}

export const HalfWidth = styled(GridArea)`
  width: 50%;
`
