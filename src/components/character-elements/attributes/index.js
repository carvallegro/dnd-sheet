import _ from 'lodash'
import React, { Fragment } from 'react'
import { connect } from 'react-redux'

import Attribute from '@common/attribute'
import styled from 'styled-components'

const Attributes = ({ attributes }) => (
  <Fragment>
    {_.flatMap(attributes, (v, k) => (
      <Attribute key={k} name={v.name} value={v.base} modifier={v.modifier} />
    ))}
  </Fragment>
)

const mapStateToProps = state => ({
  attributes: state.attributes
})

export default connect(mapStateToProps)(Attributes)

export const AttributesWrapper = styled.div`
  grid-area: attributes;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
