import _ from 'lodash'
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { DISPLAY_MODE } from '@common/layout'

import Checkbox from '../fields/checkbox'
import { Attribute, SkillLineWrapper, SkillName, SkillValue } from './styles'

export const SkillLine = ({
  name,
  attribute,
  value,
  isProficient,
  onProficiencyChange
}) => (
  <SkillLineWrapper>
    <Checkbox
      name={_.snakeCase(`skill-${name}`)}
      checked={isProficient}
      onChange={onProficiencyChange}
    />
    <SkillValue>{value}</SkillValue>
    <SkillName>{name}</SkillName>
    <Attribute>{attribute}</Attribute>
  </SkillLineWrapper>
)

SkillLine.propTypes = {
  attribute: PropTypes.string,
  name: PropTypes.string,
  isProficient: PropTypes.bool,
  onProficiencyChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

SkillLine.defaultProps = {
  onProficiencyChange: () => {}
}

export const SkillGrid = styled.div`
  display: grid;
  grid-gap: 0.2rem;
  grid-auto-flow: column;
  grid-template-rows: repeat(${({ rows }) => rows}, 1fr);
  grid-auto-columns: auto;
`

SkillGrid.propTypes = {
  rows: PropTypes.number
}

SkillGrid.defaultProps = {
  rows: 6
}
