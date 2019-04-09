import styled from 'styled-components'
import PropTypes from 'prop-types'

import { media, NotPrintableStyle } from '@styles'

export const DISPLAY_MODE = {
  web: 'web',
  print: 'print'
}

export const PageWrapper = styled.div`
  position: relative;
  width: 1100px;
  margin: 0 auto;

  ${NotPrintableStyle}
`

export const GridArea = styled.div`
  ${({ gridArea }) => gridArea && `grid-area: ${gridArea};`}
  display: flex;
  flex-direction: column;
`
GridArea.propStyle = {
  gridArea: PropTypes.string
}

export const Page = styled(GridArea)`
  height: ${({ theme }) =>
    DISPLAY_MODE.print === theme.displayMode ? '210mm' : 'initial'};
  width: ${({ theme }) =>
    DISPLAY_MODE.print === theme.displayMode ? '148mm' : 'initial'};
  background-color: white;
  padding: 1rem;
  display: grid;
  grid-gap: 1rem;

  ${media.print`
    height: 240mm;
    width: 148mm;
    page-break-after: always;
    page-break-inside: avoid;
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
export const Column = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-flow: row;
  grid-gap: 1.8rem;
  justify-content: start;
  align-content: start;
`
