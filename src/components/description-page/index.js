import React from 'react'
import styled from 'styled-components'

import { Page } from '../common/layout'
import PageHeading from '../common/typography'
import Input from '../common/inputs/input'
import TextAreaField from '../common/inputs/textarea'

const Description = styled(Page)`
  grid-template:
    "heading heading money money money money" 3.2rem
    "heading heading money money money money" 3.2rem
    
    "alliesOrganisations alliesOrganisations alliesOrganisations alliesOrganisations alliesOrganisations alliesOrganisations" 25%
    
    "backgroundDescription backgroundDescription backgroundDescription backgroundDescription backgroundDescription backgroundDescription" auto
    / 1fr 1fr 1fr 1fr 1fr 1fr;
`

const HeaderWrapping = styled.div`
  grid-area: heading;
`

const TempMoney = styled.div`
  grid-area: money;
`

const DescriptionPage = () => <Description>
  <HeaderWrapping>
    <PageHeading>Description</PageHeading>
    <Input label="Character Name" size='small'/>
  </HeaderWrapping>

  <TextAreaField gridArea="alliesOrganisations" label="Allies & Organizations"/>
  <TextAreaField gridArea="backgroundDescription" label="Backgrounds & Description"/>
</Description>

export default DescriptionPage
