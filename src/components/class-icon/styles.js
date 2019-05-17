import styled from 'styled-components'

export const ClassIconWrapper = styled.div`
  height: ${({ height }) => height};

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
