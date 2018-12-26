import React from 'react'
import styled from 'styled-components'

import { Page } from '../common/layout'
import PageHeading from '../common/typography'
import Input from '../common/inputs/input'
import TextAreaField from '../common/inputs/textarea'

const PageAWrapper = styled(Page)`
  grid-template:
    "heading heading heading heading heading heading" 4rem
    
    "misc misc misc misc misc misc" auto
    
    "generalGear generalGear generalGear generalGear generalGear generalGear" 30%
    / 1fr 1fr 1fr 1fr 1fr 1fr;
`


const PageB = () => <PageAWrapper>
  <PageHeading gridArea='heading'>Inventory</PageHeading>

  <TextAreaField gridArea="misc" label="Miscellaneous"/>
  <TextAreaField gridArea="generalGear" label="General Gear"/>
</PageAWrapper>

export default PageB
