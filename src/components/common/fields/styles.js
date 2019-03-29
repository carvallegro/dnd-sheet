import styled from 'styled-components'
import PropTypes from 'prop-types'
import { DottedBorderStyle, fonts, fontSizes, SIZES } from '@styles'
import { GridArea } from '../layout'

export const FieldWrapper = styled(GridArea)`
  display: flex;
  flex-direction: column;
  max-width: 100%;
`

export const Input = styled.input`
  width: 100%;
  border: none;
  margin: 0;
  padding: 0.2em;
  background: none;

  font-family: ${fonts.input};
  color: ${({ theme }) => theme.textColor};

  font-size: calc(1pt + ${({ size }) => fontSizes[size]});
  ${DottedBorderStyle}

  &:active, &:focus {
    outline: none;
  }
`

Input.propTypes = {
  size: PropTypes.oneOf(Object.values(SIZES))
}
Input.defaultProps = {
  size: SIZES.medium
}

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

export const SelectInput = styled(Input)`
  border: none;
`

export const DottedBorderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  ${DottedBorderStyle}
`
