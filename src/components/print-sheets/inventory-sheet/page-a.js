import React from 'react'
import PageTitle from '../../common/typography'
import Input from '../../common/inputs/input'
import TextAreaField from '../../common/inputs/textarea'
import {
  HeaderWrapping,
  MoneyTopLine,
  MoneyWrapping,
  PageAWrapper
} from './styles'
import Money from '../../common/money'

const PageA = ({ id, gridArea }) => (
  <PageAWrapper id={id} gridArea={gridArea}>
    <HeaderWrapping>
      <PageTitle>Inventory</PageTitle>
      <Input label="Character Name" size="small" />
    </HeaderWrapping>
    <MoneyWrapping>
      <MoneyTopLine>
        <Money name="Platinum" value={320} justifySelf="center" />
        <Money name="Gold" value={1734} justifySelf="center" />
        <Money name="Electrum" value={0} justifySelf="center" />
      </MoneyTopLine>
      <MoneyTopLine>
        <Money name="Silver" value={83} justifySelf="flex-end" />
        <div />
        <Money name="Copper" value={57} justifySelf="flex-start" />
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
