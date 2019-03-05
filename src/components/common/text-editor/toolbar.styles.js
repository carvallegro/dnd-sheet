import styled from 'styled-components'
import { fonts } from '@styles'

export const ToolbarButton = styled.button`
  margin: 0;
  border: 1px solid transparent;
  border-radius: 1px;
  padding: 0.2rem;
  background-color: transparent;
  cursor: pointer;

  display: flex;
  align-items: flex-end;

  font-family: ${fonts.input};
  font-weight: bold;
  color: ${({ theme }) => theme.textColor};

  opacity: 0.4;

  ${({ active }) =>
    active &&
    `
    opacity: 1;
    background: rgba(0,0,0,0.2);
  `}

  transition: opacity 150ms, background-color 150ms;

  & > span {
    font-size: 0.6rem;
    line-height: 0.6rem;
  }

  &:active {
    opacity: 1;
  }
`

export const SaveButton = styled(ToolbarButton)`
  color: green;
`

export const ToolbarWrapper = styled.div`
  position: sticky;
  padding: 0.2rem 0.4rem;
  margin: 0.2rem 0.2rem 0.5rem;
  background-color: ${({ theme }) => theme.backgroundColor};
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);

  display: flex;

  & > * + * {
    margin-left: 0.4rem;
  }
`
