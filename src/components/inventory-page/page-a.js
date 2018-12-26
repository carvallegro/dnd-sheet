import React from 'react'
import PageHeading from '../common/typography'
import Input from '../common/inputs/input'
import TextAreaField from '../common/inputs/textarea'
import {
  HeaderWrapping,
  MoneyTopLine,
  MoneyWrapping,
  PageAWrapper
} from './styles'
import Money from '../common/money'

const PageA = () => (
  <PageAWrapper>
    <HeaderWrapping>
      <PageHeading>Inventory</PageHeading>
      <Input label="Character Name" size="small" />
    </HeaderWrapping>
    <MoneyWrapping>
      <MoneyTopLine>
        <Money name="Platinum" value={100320} justifySelf="center" />
        <Money name="Gold" value={100320} justifySelf="center" />
        <Money name="Electrum" value={100320} justifySelf="center" />
      </MoneyTopLine>
      <MoneyTopLine>
        <Money name="Silver" value={100320} justifySelf="flex-end" />
        <div />
        <Money name="Copper" value={109320} justifySelf="flex-start" />
      </MoneyTopLine>
    </MoneyWrapping>

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
