import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { colors, fonts, fontSizes } from '../../styles'

export const HeaderNav = styled(NavLink)`
  position:relative;
  margin: 0 12px;
  
  font-family: ${fonts.display};
  font-size: ${fontSizes.large};
  color: ${colors.black};
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
 
    background-color: ${colors.black};
    
    transition: height 100ms, width 250ms;
  }
  
  &:hover::before{
    height: 2px;
    width: 50%;
    
    transition: height 100ms, width 250ms;
  }
`
