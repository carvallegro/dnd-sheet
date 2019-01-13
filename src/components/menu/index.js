import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'

import { ReactComponent as MenuIcon } from './menu-icon.svg'
import { MenuButton, Overlay, ShortcutButton, Wrapper } from './styles'

// TODO: add open effect. using effect
const Menu = ({ onMenuClick }) => {
  const [isOpen, setMenuOpen] = useState(false)
  const menuClick = openMenu => {
    onMenuClick(openMenu)
    setMenuOpen(openMenu)
  }
  return (
    <Fragment>
      <Wrapper>
        <MenuButton role="button" onClick={() => menuClick(!isOpen)}>
          <MenuIcon />
        </MenuButton>

        <ShortcutButton visible={isOpen}>Attributes</ShortcutButton>
        <ShortcutButton visible={isOpen}>Skills</ShortcutButton>
        <ShortcutButton visible={isOpen}>Saving Throws</ShortcutButton>
      </Wrapper>
      <Overlay visible={isOpen} onClick={() => menuClick(false)} />
    </Fragment>
  )
}

Menu.propTypes = {
  onMenuClick: PropTypes.func
}

export default Menu
