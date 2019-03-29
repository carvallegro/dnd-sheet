import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors, fontSizes, SIZES } from '@styles'

const Wrapper = styled.div`
  position: relative;
  height: ${({ size }) => fontSizes[size]};
  width: ${({ size }) => fontSizes[size]};

  label {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: transparent;
    border: 1px solid ${colors.black};
    border-radius: 50%;
    cursor: pointer;
  }

  input[type='checkbox'] {
    visibility: hidden;
    margin: 0;
    padding: 0;
    border: none;
    height: 100%;
    width: 100%;

    &:checked + label {
      background-color: ${({ theme }) => theme.textColor};
      border-color: ${({ theme }) => theme.textColor};
    }
  }
`

const Checkbox = ({ name, size, checked, onChange }) => {
  const [isChecked, setChecked] = useState(checked)
  const updateValue = value => {
    setChecked(value)
    onChange(value)
  }
  return (
    <Wrapper size={size}>
      <input
        name={name}
        checked={isChecked}
        type="checkbox"
        onChange={() => updateValue(!checked)}
      />
      <label htmlFor={name} />
    </Wrapper>
  )
}

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(Object.values(SIZES)),
  checked: PropTypes.bool,
  onChange: PropTypes.func
}

Checkbox.defaultProps = {
  size: SIZES.xsmall,
  onChange: () => {}
}

export default Checkbox
