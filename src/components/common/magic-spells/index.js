import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { GridArea } from '../layout'
import Spell from './spell'
import SpellListHeading from './spell-list-heading'

const Wrapper = styled(GridArea)`
  display: grid;
  grid-column-gap: 1rem;
  grid-template-columns: ${({ columns }) => {
  if (columns === 2) return '1fr 1fr'
  return '1fr'
}};
`
Wrapper.propTypes = {
  columns: PropTypes.number
}
Wrapper.defaultProps = {
  columns: 1
}

const TEST = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const MagicSpells = ({ gridArea, columns }) => (
  <Wrapper gridArea={gridArea} columns={columns}>
    <SpellListHeading spellLevel={1} slotTotal={4} slotExtended={0}/>
    {TEST.map(v => (
      <Spell key={v}/>
    ))}
  </Wrapper>
)

export default MagicSpells
