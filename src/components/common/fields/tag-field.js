import _ from 'lodash'
import React from 'react'
import PropTypes from 'prop-types'

import Label from '../typography/label'

import { FieldWrapper } from './styles'
import InputField from '@common/fields/input-field'
import styled from 'styled-components'
import Tag from '@common/tag'

import { Icon } from 'react-icons-kit'
import { plus } from 'react-icons-kit/metrize/plus'
import { fontSizes } from '@styles'

const TagWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  
  & > * {
  margin-right: .4rem;
  }
`

const TagButton = styled.button`
  margin: 0;
  padding: 0;
  background: none;
  border: none;
  font-size: calc(1pt + ${({ size }) => fontSizes[size]});
  cursor: pointer;
  
  &:active, &:focus{
    outline: none;
  }
`

const TagField = ({
                    gridArea,
                    label,
                    size,
                    value,
                    options,
                    onChange,
                    readOnly,
                    editing
                  }) => (
  <FieldWrapper gridArea={gridArea}>
    <TagWrapper>
      {
        _(options)
          .map(o =>
            <Tag k={o.value} size={size} reverse={!value.includes(o.value)}>
              <TagButton size={size}><Icon icon={plus}/></TagButton>
              {o.label}
            </Tag>)
          .value()
      }
    </TagWrapper>
    {label && <Label size={size}>{label}</Label>}
  </FieldWrapper>
)

TagField.propTypes = {
  ...InputField.propTypes,
  value: PropTypes.array,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.any.isRequired,
    label: PropTypes.string.isRequired
  }))
}

TagField.defaultProps = {
  value: [],
  options: []
}

export default TagField
