import _ from 'lodash'
import React from 'react'
import PropTypes from 'prop-types'
import { rgba } from 'polished'

import Label from '@common/typography/label'

import { colors, SIZES } from '@styles'
import InputField from '@common/fields/input-field'
import styled from 'styled-components'
import Tag from '@common/tag'

import { FieldWrapper } from './styles'

const TagWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  
  & > * {
    margin-right: .4rem;
    margin-top: .4rem;
  }
`

const TagButton = styled(Tag)`
  cursor: pointer;
  
  transition: background-color 250ms;
  &:hover{
    background-color: ${({reverse, color}) =>
  reverse
  ? rgba(color, 0.2)
  : rgba(color, 0.8)};
  }
  
  &:active{
    background-color: ${({reverse, color}) =>
  reverse
    ? rgba(color, 0.4)
    : rgba(color, 0.9)};
  }
`


const TagField = ({
                    gridArea,
                    label,
                    size,
                    color,
                    value,
                    options,
                    onChange,
                    readOnly,
                    editing
                  }) => (
  <FieldWrapper gridArea={gridArea}>
    {label && <Label size={size}>{label}</Label>}
    <TagWrapper>
      {
        _(options)
          .sortBy(o => !value.includes(o.value))
          .map(o =>
            <TagButton as='button' k={o.value} size={size} color={color} reverse={!value.includes(o.value)} size={SIZES.small}>
              {o.label}
            </TagButton>)
          .value()
      }
    </TagWrapper>
  </FieldWrapper>
)

TagField.propTypes = {
  ...InputField.propTypes,
  color: PropTypes.oneOf(Object.values(colors)),
  value: PropTypes.array,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.any.isRequired,
    label: PropTypes.string.isRequired
  })),
}

TagField.defaultProps = {
  value: [],
  options: []
}

export default TagField
