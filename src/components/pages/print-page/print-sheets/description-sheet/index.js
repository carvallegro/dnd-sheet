import React from 'react'

import PageTitle from '@common/typography/index'
import InputField from '@common/fields/input-field'
import TextAreaField from '@common/fields/textarea-field'
import { HalfWidth } from '@components/layout'

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
} from '@character-elements/description'

const DescriptionSheet = ({ id, gridArea }) => (
  <Description id={id} gridArea={gridArea}>
    <HeadingWrapper>
      <Heading>
        <PageTitle>History</PageTitle>
        <HalfWidth>
          <InputField label="Character Name" size="small" />
        </HalfWidth>
      </Heading>

      <DescriptionHeader>
        <InputField gridArea="background" label="Background" />
        <InputField gridArea="alignment" label="Alignment" />

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
