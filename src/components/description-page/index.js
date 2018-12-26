import React from 'react'
import PageHeading from '../common/typography'
import Input from '../common/inputs/input'
import TextAreaField from '../common/inputs/textarea'
import {
  Description,
  DescriptionHeader,
  HalfWidth,
  HeaderWrapping,
  Heading
} from './styles'

const DescriptionPage = () => (
  <Description>
    <HeaderWrapping>
      <Heading>
        <PageHeading>Description</PageHeading>
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
    </HeaderWrapping>
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

export default DescriptionPage
