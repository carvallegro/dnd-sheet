import React, { useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  height: 0.6rem;
  width: 0.6rem;

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

const Checkbox = ({ name }) => {
  const [checked, setChecked] = useState(false)
  return (
      <Wrapper >
        <input id={name} name={name} checked={checked} type="checkbox" onChange={() => setChecked(!checked)}/>
        <label htmlFor={name}/>
      </Wrapper>
  )
}

export default Checkbox
