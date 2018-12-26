import React from 'react'
import styled from 'styled-components'

import { Page } from '../common/layout'
import PageHeading from '../common/typography'
import Input from '../common/inputs/input'
import TextAreaField from '../common/inputs/textarea'

const PageAWrapper = styled(Page)`
  grid-template:
    "heading heading money money money money" 3.2rem
    "heading heading money money money money" 3.2rem
    
    "treasure treasure treasure petsTransportation petsTransportation petsTransportation" auto
    
    "weaponsArmor weaponsArmor weaponsArmor weaponsArmor weaponsArmor weaponsArmor" 30%
    / 1fr 1fr 1fr 1fr 1fr 1fr;
`

const HeaderWrapping = styled.div`
  grid-area: heading;
`

const PageA = () => <PageAWrapper>
  <HeaderWrapping>
    <PageHeading>Inventory</PageHeading>
    <Input label="Character Name" size='small'/>
  </HeaderWrapping>

  <TextAreaField gridArea="treasure" label="Treasure"/>
  <TextAreaField
    gridArea="petsTransportation"
    label="Pets & Transportation"
    align="right"
  />

  <TextAreaField gridArea="weaponsArmor" label="Weapons & Armors"/>
</PageAWrapper>

export default PageA
