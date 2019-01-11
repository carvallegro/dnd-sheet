import React, { Fragment, useState } from 'react'
import styled from 'styled-components'
import { lighten, darken, transparentize } from 'polished'
import { colors, fonts } from '../../styles'

import { ReactComponent as MenuIcon } from './menu-icon.svg'

const Wrapper = styled.div`
  position: sticky;
  z-index: 300;
  bottom: 1rem;
  align-self: flex-end;
  justify-self: flex-start;

  display: flex;
  align-items: center;
`

const MenuButton = styled.button`
  padding: 2px 0 0;
  height: 60px;
  width: 60px;
  border: none;
  border-radius: 50%;

  box-shadow: 0 1px 9px -1px rgba(0, 0, 0, 0.5);

  background-color: ${colors.black};
  color: white;

  &:focus {
    outline: none;
  }

  &:hover {
    cursor: pointer;
    background-color: ${lighten(0.1, colors.black)};
  }

  &:active {
    background-color: ${darken(0.1, colors.black)};
  }
`

const ShortcutButton = styled(MenuButton)`
  box-shadow: none;
  height: initial;
  min-width: 120px;
  width: auto;
  margin-left: 1rem;
  border-radius: 24px;
  padding: 0.4rem 0.8rem;

  font-family: ${fonts.input};
  font-size: 1rem;
  text-align: center;
  opacity: 1;

  display: ${({ visible }) => (visible ? 'inherit' : 'none')};
`

const Overlay = styled.div`
  position: fixed;
  z-index: 200;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;

  background-color: ${transparentize(0.5, colors.black)};

  display: ${({ visible }) => (visible ? 'inherit' : 'none')};
`

// TODO: add open effect. using effect
const Menu = () => {
  const [isOpen, setMenuOpen] = useState(false)
  return (
    <Fragment>
      <Wrapper>
        <MenuButton role="button" onClick={() => setMenuOpen(!isOpen)}>
          <MenuIcon />
        </MenuButton>

        <ShortcutButton visible={isOpen}>Attributes</ShortcutButton>
        <ShortcutButton visible={isOpen}>Skills</ShortcutButton>
        <ShortcutButton visible={isOpen}>Saving Throws</ShortcutButton>
      </Wrapper>
      <Overlay visible={isOpen} onClick={() => setMenuOpen(false)} />
    </Fragment>
  )
}

export default Menu
