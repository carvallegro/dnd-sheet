import React, { Fragment, useState } from 'react'
import styled from 'styled-components'
import { NotPrintableStyle } from '@styles'
import Header from '../header'
import Menu from '../menu'

const Wrapper = styled.div`
  padding-top: 65px;
  position: relative;
  width: 1100px;
  margin: 0 auto;

  ${NotPrintableStyle}
`

const PageContent = styled.div`
  ${({ isMenuOpen }) =>
    isMenuOpen &&
    `
    filter: blur(3px);
`}
  transition: filter 500ms linear;
`

const AppTemplate = ({ children }) => {
  const [isMenuOpen, setMenuOpen] = useState(false)

  return (
    <Fragment>
      <Header isMenuOpen={isMenuOpen} />
      <Wrapper>
        <PageContent isMenuOpen={isMenuOpen}>{children}</PageContent>
        <Menu onMenuClick={setMenuOpen} />
      </Wrapper>
    </Fragment>
  )
}

export default AppTemplate
