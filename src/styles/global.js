import { createGlobalStyle } from 'styled-components'
import { DISPLAY_MODE } from '../components/common/layout'
import { colors, media } from './index'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lora:400,400i,700,700i|Open+Sans');

  html{
    font-size: ${({ theme }) =>
      DISPLAY_MODE.print == theme.displayMode ? '10pt' : '16px'};
    box-sizing: border-box;
  }

  body {
    margin: 0;
    color: ${colors.black};
  }

  ${media.print`
    html {
      font-size: 10pt;
      width: 159mm;
    }
  `}
`
export default GlobalStyle
