import React from 'react'
import PageHeading from '../common/typography'
import Input from '../common/inputs/input'
import TextAreaField from '../common/inputs/textarea'
import { HeaderWrapping, PageAWrapper } from './styles'

const PageA = () => (
  <PageAWrapper>
    <HeaderWrapping>
      <PageHeading>Inventory</PageHeading>
      <Input label="Character Name" size="small" />
    </HeaderWrapping>

    <TextAreaField gridArea="treasure" label="Treasure" />
    <TextAreaField
      gridArea="petsTransportation"
      label="Pets & Transportation"
      align="right"
    />

    <TextAreaField gridArea="weaponsArmor" label="Weapons & Armors" />
  </PageAWrapper>
)

export default PageA
