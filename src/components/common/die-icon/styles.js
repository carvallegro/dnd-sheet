import styled from 'styled-components'
import { fontSizes } from '@styles/index'

export const DieIconWrapper = styled.div`
  height: ${({ size }) => fontSizes[size]};

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    height: 100%;
    width: auto;
  }

  svg path {
    fill: ${({ theme, color }) => color || theme.textColor};
  }
`
