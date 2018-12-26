import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;

  label {
    position: absolute;
    left: 0;
    top: 0;
    height: 0.6rem;
    width: 0.6rem;
    background-color: transparent;
    border: 1px solid black;
    border-radius: 50%;
    cursor: pointer;
  }

  input[type='checkbox'] {
    visibility: hidden;

    &:checked + label {
      background-color: black;
      border-color: black;
    }
  }
`

const Checkbox = ({ name }) => (
  <div>
    <Wrapper>
      <input type="checkbox" id={name} name={name} />
      <label for={name} />
    </Wrapper>
  </div>
)
export default Checkbox
