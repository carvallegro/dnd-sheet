import React from 'react'
import styled from 'styled-components'
import { colors } from '@styles'
import { PageWrapper } from '@components/layout'

const Wrapper = styled.div`
  background-color: ${colors['brownish-grey']}
`

const ChooseClass = () => <Wrapper>
  <PageWrapper>
    <h1>Classes</h1>
  </PageWrapper>
</Wrapper>

export default ChooseClass
