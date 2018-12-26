import React from 'react'
import styled from 'styled-components'

import { GridArea, Page } from '../common/layout'
import PageHeading from '../common/typography'
import Input from '../common/inputs/input'
import TextAreaField from '../common/inputs/textarea'

const Description = styled(Page)`
  grid-template:
    'heading heading heading heading heading heading' 10rem
    'alliesOrganisations alliesOrganisations alliesOrganisations alliesOrganisations alliesOrganisations alliesOrganisations' 25%
    'backgroundDescription backgroundDescription backgroundDescription backgroundDescription backgroundDescription backgroundDescription' auto
    / 1fr 1fr 1fr 1fr 1fr 1fr;
`

const HeaderWrapping = styled.div`
  position: relative;
  grid-area: heading;

  display: grid;
  grid-template-columns: 40% 60%;
`

const Heading = styled.div``

const DescriptionHeader = styled.div`
  position: relative;
  display: grid;
  grid-gap: 1rem;
  grid-template:
    'background background background alignment alignment alignment' 2.3rem
    'skin skin eyes eyes hair hair' 2.3rem
    'age age height height weight weight' 2.3rem
    / 1fr 1fr 1fr 1fr 1fr 1fr;
`

const HalfWidth = styled(GridArea)`
  width: 50%;
`

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
