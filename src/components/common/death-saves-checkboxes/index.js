import _ from 'lodash'
import React from 'react'
import PropTypes from 'prop-types'
import { SIZES as sizes, SIZES } from '@styles'
import Checkbox from '@common/fields/checkbox'
import Label from '@common/typography/label'
import { SaveGroup, Wrapper } from '@common/death-saves-checkboxes/styles'

const DeathSavesCheckboxes = ({ label, name, value, maxThrows, reversed }) => (
  <Wrapper>
    <SaveGroup reversed={reversed}>
      {_.map(new Array(maxThrows), (_, i) => (
        <Checkbox
          key={i}
          name={`${name}-${i}`}
          size={SIZES.small}
          checked={i + 1 == value}
        />
      ))}
    </SaveGroup>
    <Label size={sizes.small} align={reversed ? 'right' : 'left'}>
      {label}
    </Label>
  </Wrapper>
)

DeathSavesCheckboxes.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.number,
  maxThrows: PropTypes.number,
  reversed: PropTypes.bool
}

DeathSavesCheckboxes.defaultProps = {
  value: 0,
  maxThrows: 3,
  reversed: false
}

export default DeathSavesCheckboxes
