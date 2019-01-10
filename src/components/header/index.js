import React from 'react'
import styled from 'styled-components'
import { colors } from '../../styles'
import Input from '../common/inputs/input'
import { HeaderNav } from './styles'

const Wrapper = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  
  height: 65px;
  box-shadow: 0 1px 9px -1px rgba(0, 0, 0, 0.5);
  
  background-color: ${colors.white};
`

const Content = styled.div`
  width: 900px;
  margin-right: auto;
  margin-left: auto;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Navigation = styled.div`
  display: flex;
  align-items: stretch;
`

const Header = () =>
  <Wrapper>
    <Content>
      <Input gridArea="characterName" label="Character Name" />
      <Navigation>
        <HeaderNav to='/sheet'>General</HeaderNav>
        <HeaderNav to='/a'>Description</HeaderNav>
        <HeaderNav to='/b'>Combat</HeaderNav>
        <HeaderNav to='/c'>Magic</HeaderNav>
        <HeaderNav to='/d'>Inventory</HeaderNav>
      </Navigation>
    </Content>
  </Wrapper>

export default Header
