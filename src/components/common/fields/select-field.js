import React, {useState} from 'react'
import styled from 'styled-components'

import Label from '@common/typography/label'
import InputField from '@common/fields/input-field'
import { FieldWrapper, SelectInput } from '@common/fields/styles'
import { DottedBorderWrapper } from '@components/common/fields/styles'

import { Icon } from 'react-icons-kit'
import {androidArrowDropdown} from 'react-icons-kit/ionicons/androidArrowDropdown'
import { shadowLevels } from '@styles'

const SelectButton = styled.button`
  background: none;
  border:none;
  opacity: 0.8;
  cursor: pointer;
  
  &:hover {
    opacity: 1;
  }
  
  &:focus {
    outline: none;
  }
  
  ${({isOpen}) => isOpen && `
    transform: rotate(180deg);
  `}
`

const SelectWrapper = styled(DottedBorderWrapper)`
  position: relative;
`

const SelectWindow = styled.div`
  position: absolute;
  top: 100%;
  width: 100%;
  
  background-color: white;
  ${shadowLevels.levelOne}
`

const SelectField = ({
  gridArea,
  label,
  size,
  type,
  value,
  onChange,
  placeholder,
  readOnly
}) => {
  const [isOpen, setOpen] = useState(false)
  return (
    <FieldWrapper gridArea={gridArea}>
      <SelectWrapper>
        <SelectInput
          type={type}
          size={size}
          value={value}
          onChange={() => {}}
          placeholder={placeholder}
          readOnly
        />
        {
          !readOnly &&
          <SelectButton role='button' onClick={() => setOpen(!isOpen)} isOpen={isOpen}>
            <Icon icon={androidArrowDropdown}/>
          </SelectButton>
        }
        <SelectWindow>
          <p>trsters</p>
          <p>testestete</p>
          <p>testes</p>
          <p>testes</p>
        </SelectWindow>
      </SelectWrapper>
      {label && <Label size={size}>{label}</Label>}
    </FieldWrapper>
  )
}

SelectField.propTypes = InputField.propStyle

export default SelectField
