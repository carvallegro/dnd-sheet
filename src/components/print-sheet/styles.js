import styled from 'styled-components'

import { colors, media } from '../../styles'

export const BookWrapper = styled.div`
  overflow: auto;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  background-color: ${colors.black};

  ${media.print`
    width: initial;
    height: initial;
    padding: 0;
    background: none;
  `}
`
export const Book = styled.div`
  padding: 2rem 4rem;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: auto auto;
  //grid-template-columns: repeat(3, 148mm);
  //grid-auto-rows: 210mm;
  grid-template:
    'general description .' 1fr
    'combat . .' 1fr
    'magica magicb magicc' 1fr
    'inventorya inventoryb .' 1fr
    / 1fr 1fr 1fr;

  //grid-auto-columns: 148mm;
  //  grid-template-rows: repeat(8, 210mm);
  //  grid-template-areas:
  //    'general'
  //    'description'
  //    'combat'
  //    'magica' 'magicb' 'magicc'
  //    'inventorya' 'inventoryb';

  ${media.print`
    left: 0px;
    top: 0px;
    position:absolute;
    display: initial;
  `}
`

// display: grid;
// grid-gap: 0;
// grid-auto-columns: 148mm;
// grid-template-rows: repeat(8, 210mm);
// grid-template-areas:
//   'general'
//   'description'
//   'combat'
//   'magica' 'magicb' 'magicc'
//   'inventorya' 'inventoryb';
