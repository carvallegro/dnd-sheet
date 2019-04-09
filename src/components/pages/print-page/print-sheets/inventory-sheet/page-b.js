import React from 'react'
import styled from 'styled-components'

import { Page } from '@components/layout'
import PageTitle from '@common/typography/index'
import TextAreaField from '@common/fields/textarea-field'

const PageBWrapper = styled(Page)`
  grid-template:
    'heading heading heading heading heading heading' 4rem
    'misc misc misc misc misc misc' auto
    'generalGear generalGear generalGear generalGear generalGear generalGear' 30%
    / 1fr 1fr 1fr 1fr 1fr 1fr;
`

const PageB = ({ id, gridArea }) => (
  <PageBWrapper id={id} gridArea={gridArea}>
    <PageTitle gridArea="heading">Inventory</PageTitle>

    <TextAreaField gridArea="misc" label="Miscellaneous" />
    <TextAreaField gridArea="generalGear" label="General Gear" />
  </PageBWrapper>
)

export default PageB
