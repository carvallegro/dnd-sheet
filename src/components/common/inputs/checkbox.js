import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { fontSizes, SIZES } from '../../../styles'

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
    border: 1px solid black;
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
      background-color: black;
      border-color: black;
    }
  }
`

const Checkbox = ({ name, size }) => {
  const [checked, setChecked] = useState(false)
  return (
    <Wrapper size={size}>
      <input
        id={name}
        name={name}
        checked={checked}
        type="checkbox"
        onChange={() => setChecked(!checked)}
      />
      <label htmlFor={name} />
    </Wrapper>
  )
}

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(Object.values(SIZES))
}

Checkbox.defaultProps = {
  size: SIZES.xsmall
}

export default Checkbox
