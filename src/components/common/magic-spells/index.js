import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { GridArea } from '../layout'
import Spell from './spell'
import SpellListHeading from './spell-list-heading'

const Wrapper = styled(GridArea)`
  display: grid;
  grid-column-gap: 1rem;
  align-items: flex-end;
  grid-template-columns: repeat(${({ columns }) => Math.max(1, columns)}, 1fr);
`
Wrapper.propTypes = {
  columns: PropTypes.number
}
Wrapper.defaultProps = {
  columns: 1
}

const MagicSpells = ({ gridArea, columns, children }) => (
  <Wrapper gridArea={gridArea} columns={columns}>
    <SpellListHeading spellLevel={1} slotTotal={4} slotExtended={0} />
    {children}
  </Wrapper>
)

export default MagicSpells
