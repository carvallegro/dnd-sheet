import styled from 'styled-components'
import PropTypes from 'prop-types'
import { DottedBorderStyle, fonts, fontSizes, SIZES } from '@styles'
import { GridArea } from '../../layout'

export const FieldWrapper = styled(GridArea)`
  display: flex;
  flex-direction: column;
  max-width: 100%;
`

export const DottedBorderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  ${DottedBorderStyle}
`

export const FakeInput = styled.p`
  width: 100%;
  border: none;
  margin: 0;
  background: none;

  font-family: ${fonts.input};
  color: ${({ theme }) => theme.textColor};

  font-size: calc(1pt + ${({ size }) => fontSizes[size]});
`

export const Input = styled.input`
  width: 100%;
  border: none;
  margin: 0;
  background: none;

  font-family: ${fonts.input};
  color: ${({ theme }) => theme.textColor};

  font-size: calc(1pt + ${({ size }) => fontSizes[size]});

  &:active,
  &:focus {
    outline: none;
  }
`
Input.propTypes = {
  size: PropTypes.oneOf(Object.values(SIZES))
}
Input.defaultProps = {
  size: SIZES.medium
}

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;

  ${({ editing }) =>
    editing &&
    `
    padding: 0.2em 0;
    ${DottedBorderStyle}
  `}

  & > * {
    margin: 0 0.2rem;
    &:only-child {
      margin: 0;
    }
  }

  & > ${Input} {
    flex-grow: 1;
  }
`

export const SelectInput = styled(Input)`
  border: none;
`

export const TextArea = styled.textarea`
  max-width: 100%;
  height: 100%;

  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 1px;

  font-family: ${fonts.input};
  font-size: 1rem;
  line-height: 1.25;

  resize: none;

  &:focus {
    outline: none;
    border-color: rgba(0, 0, 0, 0.4);
  }
`
