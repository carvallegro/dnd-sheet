import React from 'react'
import styled from 'styled-components'

import { CardBody } from '@components/common/card/styles'

import { Column } from '@components/layout'
import Card from '@common/card'

import Attributes, { AttributesWrapper } from '@character-elements/attributes'
import Skills from '@character-elements/skills'
import SavingThrows from '@character-elements/saving-throws'
import {
  FeaturesAndTraits,
  OtherProfAndLanguages
} from '@character-elements/general'
import {
  Bonds,
  Flaws,
  Ideals,
  PersonalityTraits
} from '@character-elements/description'

import Stats from './stats'
import Informations from './informations'

const Wrapper = styled.div`
  padding-top: 1.8rem;
  display: grid;
  grid-template-columns: 65fr 45fr;
  grid-auto-flow: column;
  grid-gap: 2rem;
`

const GeneralPage = () => (
  <Wrapper>
    <Column>
      <Card title="Informations" gridColumn="primary">
        <CardBody>
          <Informations />
        </CardBody>
      </Card>

      <Card title="Abilities" gridColumn="primary">
        <CardBody>
          <AttributesWrapper>
            <Attributes />
          </AttributesWrapper>
        </CardBody>
      </Card>

      <Card title="Stats" gridColumn="primary">
        <CardBody>
          <Stats />
        </CardBody>
      </Card>

      <Card title="Saving Throws" gridColumn="primary">
        <CardBody>
          <SavingThrows rows={2} />
        </CardBody>
      </Card>

      <Card title="Skills" gridColumn="primary">
        <CardBody>
          <Skills />
        </CardBody>
      </Card>
    </Column>

    <Column>
      <Card title="Personnality" gridColumn="secondary">
        <CardBody>
          <PersonalityTraits />
          <Ideals />
          <Bonds />
          <Flaws />
        </CardBody>
      </Card>

      <Card title="Other Prof. & Languages" gridColumn="secondary">
        <CardBody>
          <OtherProfAndLanguages label={null} />
        </CardBody>
      </Card>

      <Card title="Features & Traits" gridColumn="secondary">
        <CardBody>
          <FeaturesAndTraits label={null} />
        </CardBody>
      </Card>
    </Column>
  </Wrapper>
)

export default GeneralPage
