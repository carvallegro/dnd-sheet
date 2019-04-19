import _ from 'lodash'
import React from 'react'
import PropTypes from 'prop-types'

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
  margin-right: .2rem;
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
          .sortBy(o => !value.includes(o.value))
          .map(o =>
            <Tag as='button' k={o.value} size={size} color={colors.white} reverse={!value.includes(o.value)} size={SIZES.small}>
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
