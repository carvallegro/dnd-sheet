import { css } from 'styled-components'
import { transparentize } from 'polished'

export const colors = {
  'brownish-grey': '#616161',
  lightGrey: '#F3F3F3',
  black: '#2d2d2d',
  white: 'white',
  blue: '#1A5D90',
  purple: '#561E98'
}

export const typography = {
  SmallRegular: css`
    font-family: Lora;
    font-size: 8pt;
    color: ${({ theme }) => theme.textColor};
  `,
  MediumRegular: css`
    font-family: Lora;
    font-size: 10pt;
    color: ${({ theme }) => theme.textColor};
  `,
  SmallBold: css`
    font-family: Lora;
    font-size: 8pt;
    font-weight: bold;
    color: ${({ theme }) => theme.textColor};
  `,
  SmallItalic: css`
    font-family: Lora;
    font-size: 8pt;
    font-style: italic;
    color: ${({ theme }) => theme.textColor};
  `,
  SmallBoldItalic: css`
    font-family: Lora;
    font-size: 8pt;
    font-weight: bold;
    font-style: italic;
    color: ${({ theme }) => theme.textColor};
  `,
  LargeRegular: css`
    font-family: Lora;
    font-size: 12pt;
    color: ${({ theme }) => theme.textColor};
  `,
  ExtraSmallRegular: css`
    font-family: Lora;
    font-size: 6pt;
    color: ${({ theme }) => theme.textColor};
  `,
  LargeBold: css`
    font-family: Lora;
    font-size: 12pt;
    font-weight: bold;
    color: ${({ theme }) => theme.textColor};
  `,
  LargeItalic: css`
    font-family: Lora;
    font-size: 12pt;
    font-style: italic;
    color: ${({ theme }) => theme.textColor};
  `,
  LargeBoldItalic: css`
    font-family: Lora;
    font-size: 12pt;
    font-weight: bold;
    font-style: italic;
    color: ${({ theme }) => theme.textColor};
  `,
  MediumBold: css`
    font-family: Lora;
    font-size: 10pt;
    font-weight: bold;
    color: ${({ theme }) => theme.textColor};
  `,
  MediumItalic: css`
    font-family: Lora;
    font-size: 10pt;
    font-style: italic;
    color: ${({ theme }) => theme.textColor};
  `,
  MediumBoldItalic: css`
    font-family: Lora;
    font-size: 10pt;
    font-weight: bold;
    font-style: italic;
    color: ${({ theme }) => theme.textColor};
  `,
  ExtraSmallBold: css`
    font-family: Lora;
    font-size: 6pt;
    font-weight: bold;
    color: ${({ theme }) => theme.textColor};
  `,
  ExtraSmallItalic: css`
    font-family: Lora;
    font-size: 6pt;
    font-style: italic;
    color: ${({ theme }) => theme.textColor};
  `,
  ExtraSmallBoldItalic: css`
    font-family: Lora;
    font-size: 6pt;
    font-weight: bold;
    font-style: italic;
    color: ${({ theme }) => theme.textColor};
  `,
  Heading: css`
    font-family: Lora;
    font-size: 28pt;
    font-weight: bold;
    color: ${({ theme }) => theme.textColor};
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

export const labelFontSizes = {
  large: '1rem',
  medium: '0.8rem',
  small: '0.6rem',
  xsmall: '0.4rem'
}

export const fonts = {
  display: 'Lora, Times, serif',
  input: '"Open Sans", arial, sans serif'
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
  border: none;
  border-bottom: 2px solid transparent;
  border-image: repeating-linear-gradient(
      to right,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0) 2px,
      ${({ theme }) => transparentize(0.2, theme.textColor)} 2px,
      ${({ theme }) => transparentize(0.2, theme.textColor)} 3px
    )
    1 repeat;
`
