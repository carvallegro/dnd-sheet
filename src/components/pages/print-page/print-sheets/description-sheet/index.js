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

        <Input gridArea="skin" label="Skin" />
        <Input gridArea="eyes" label="Eyes" />
        <Input gridArea="hair" label="Hair" />

        <HalfWidth gridArea="age">
          <Input label="Age" />
        </HalfWidth>
        <HalfWidth gridArea="height">
          <Input label="Height" />
        </HalfWidth>
        <HalfWidth gridArea="weight">
          <Input label="Weight" />
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
