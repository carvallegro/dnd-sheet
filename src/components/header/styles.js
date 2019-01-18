import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { fonts, fontSizes } from '@styles'

export const Wrapper = styled.header`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;

  height: 65px;
  box-shadow: 0 1px 9px -1px rgba(0, 0, 0, 0.5);

  background-color: ${({ theme }) => theme.backgroundColor};

  ${({ isMenuOpen }) =>
    isMenuOpen &&
    `
    filter: blur(3px);
`}

  transition: filter 500ms linear;
`

export const Content = styled.div`
  width: 900px;
  margin-right: auto;
  margin-left: auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Navigation = styled.div`
  display: flex;
  align-items: stretch;
`

export const HeaderNav = styled(NavLink)`
  position: relative;
  margin: 0 12px;

  font-family: ${fonts.display};
  font-size: ${fontSizes.large};
  color: ${({ theme }) => theme.textColor};
  text-decoration: none;

  &.active {
    font-weight: bold;
  }

  &::before {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 0;
    right: 0;

    height: 0;
    width: 0;
    margin: 0 auto;

    background-color: ${({ theme }) => theme.textColor};

    transition: height 100ms, width 250ms;
  }

  &:hover::before {
    height: 2px;
    width: 50%;

    transition: height 100ms, width 250ms;
  }
`
