import { css } from 'styled-components'

export const colors = {
  'brownish-grey': '#616161',
  black: '#2d2d2d'
}

export const typography = {
  SmallRegular: css`
    font-family: Lora;
    font-size: 8pt;
    color: ${colors.black};
  `,
  MediumRegular: css`
    font-family: Lora;
    font-size: 10pt;
    color: ${colors.black};
  `,
  SmallBold: css`
    font-family: Lora;
    font-size: 8pt;
    font-weight: bold;
    color: ${colors.black};
  `,
  SmallItalic: css`
    font-family: Lora;
    font-size: 8pt;
    font-style: italic;
    color: ${colors.black};
  `,
  SmallBoldItalic: css`
    font-family: Lora;
    font-size: 8pt;
    font-weight: bold;
    font-style: italic;
    color: ${colors.black};
  `,
  LargeRegular: css`
    font-family: Lora;
    font-size: 12pt;
    color: ${colors.black};
  `,
  ExtraSmallRegular: css`
    font-family: Lora;
    font-size: 6pt;
    color: ${colors.black};
  `,
  LargeBold: css`
    font-family: Lora;
    font-size: 12pt;
    font-weight: bold;
    color: ${colors.black};
  `,
  LargeItalic: css`
    font-family: Lora;
    font-size: 12pt;
    font-style: italic;
    color: ${colors.black};
  `,
  LargeBoldItalic: css`
    font-family: Lora;
    font-size: 12pt;
    font-weight: bold;
    font-style: italic;
    color: ${colors.black};
  `,
  MediumBold: css`
    font-family: Lora;
    font-size: 10pt;
    font-weight: bold;
    color: ${colors.black};
  `,
  MediumItalic: css`
    font-family: Lora;
    font-size: 10pt;
    font-style: italic;
    color: ${colors.black};
  `,
  MediumBoldItalic: css`
    font-family: Lora;
    font-size: 10pt;
    font-weight: bold;
    font-style: italic;
    color: ${colors.black};
  `,
  ExtraSmallBold: css`
    font-family: Lora;
    font-size: 6pt;
    font-weight: bold;
    color: ${colors.black};
  `,
  ExtraSmallItalic: css`
    font-family: Lora;
    font-size: 6pt;
    font-style: italic;
    color: ${colors.black};
  `,
  ExtraSmallBoldItalic: css`
    font-family: Lora;
    font-size: 6pt;
    font-weight: bold;
    font-style: italic;
    color: ${colors.black};
  `,
  Heading: css`
    font-family: Lora;
    font-size: 28pt;
    font-weight: bold;
    color: ${colors.black};
  `
}

export const SIZES = {
  large: 'large',
  medium: 'medium',
  small: 'small',
  xsmall: 'xsmall'
}

export const fontSizes = {
  large: '1.2rem',
  medium: '1rem',
  small: '0.8rem',
  xsmall: '0.6rem'
}

export const fonts = {
  display: 'Lora, Times, serif',
  input: '"Work Sans", arial, sans serif'
}

export const media = {
  print: (...args) => css`
    @media only print {
      ${css(...args)};
    }
  `
}

export const NotPrintableStyle = media.print`
    visible: hidden;
    display: none;
    * {
      visible: hidden;
      display: none;
    }
  `

export const DottedBorderStyle = css`
  background: linear-gradient(to right, black 33%, rgba(255, 255, 255, 20) 0%)
    repeat-x bottom;
  background-size: 6px 2px;
`
