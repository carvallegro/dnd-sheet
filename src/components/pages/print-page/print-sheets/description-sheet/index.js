import React from 'react'

import PageTitle from '@common/typography/index'
import Input from '@common/inputs/input'
import TextAreaField from '@common/inputs/textarea'
import { HalfWidth } from '@common/layout/index'

import {
  Description,
  DescriptionHeader,
  HeadingWrapper,
  Heading
} from './styles'

import {
  Age,
  Eyes,
  Hair,
  Height,
  Skin,
  Weight
} from '@character-elements/general'

const DescriptionSheet = ({ id, gridArea }) => (
  <Description id={id} gridArea={gridArea}>
    <HeadingWrapper>
      <Heading>
        <PageTitle>History</PageTitle>
        <HalfWidth>
          <Input label="Character Name" size="small" />
        </HalfWidth>
      </Heading>

      <DescriptionHeader>
        <Input gridArea="background" label="Background" />
        <Input gridArea="alignment" label="Alignment" />

        <Skin gridArea="skin" />
        <Eyes gridArea="eyes" />
        <Hair gridArea="hair" />

        <HalfWidth gridArea="age">
          <Age />
        </HalfWidth>
        <HalfWidth gridArea="height">
          <Height />
        </HalfWidth>
        <HalfWidth gridArea="weight">
          <Weight />
        </HalfWidth>
      </DescriptionHeader>
    </HeadingWrapper>
    <TextAreaField
      gridArea="alliesOrganisations"
      label="Allies & Organizations"
    />
    <TextAreaField
      gridArea="backgroundDescription"
      label="Backgrounds & Description"
    />
  </Description>
)

export default DescriptionSheet
