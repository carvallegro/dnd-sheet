import React, { Fragment, useState } from 'react'
import styled from 'styled-components'

import { PageWrapper } from '@components/layout'
import ChooseClass from '@components/choose-class'
import Header from '../header'
import Menu from '../menu'

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
      <ChooseClass />
      <PageWrapper>
        <PageContent isMenuOpen={isMenuOpen}>{children}</PageContent>
        <Menu onMenuClick={setMenuOpen} />
      </PageWrapper>
    </Fragment>
  )
}

export default AppTemplate
