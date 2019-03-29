import _ from 'lodash'
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import Attribute from '@common/attribute'

export const Attributes = ({ attributes }) => (
  <Fragment>
    {_.flatMap(attributes, (v, k) => (
      <Attribute key={k} name={v.name} value={v.base} modifier={v.modifier} />
    ))}
  </Fragment>
)

Attributes.propTypes = {
  attributes: PropTypes.array.isRequired
}

export default Attributes
