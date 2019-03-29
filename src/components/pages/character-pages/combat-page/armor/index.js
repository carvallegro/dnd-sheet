import React from 'react'
import styled from 'styled-components'
import { BodyText, DisplayText } from '@components/common/typography'

const Wrapper = styled.div`
  display:grid;
  grid-template-columns: 50% 50%;

`

const Armor = () => <Wrapper>
  <div>
    <DisplayText as='h4'>Armor</DisplayText>
    <BodyText>Half Plate AC: 15+3 (DEX)</BodyText>
  </div>
  <div>
    <DisplayText as='h4'>Shield</DisplayText>
    <BodyText><i>None Equipped</i></BodyText>
  </div>
</Wrapper>

export default Armor
