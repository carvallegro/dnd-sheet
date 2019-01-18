import React, { Fragment } from 'react'

import Card from '@common/card'

import Attributes, { AttributesWrapper } from '@character-elements/attributes'
import Skills from '@character-elements/skills'
import { PlayerName } from '@character-elements/general'

// Use https://codepen.io/andybarefoot/pen/QMeZda
const GeneralPage = () => (
  <Fragment>
    <Card title="Test">
      <PlayerName />
    </Card>

    <Card title="Abilities">
      <AttributesWrapper>
        <Attributes />
      </AttributesWrapper>
    </Card>

    <Card title="Skills">
      <Skills />
    </Card>
  </Fragment>
)

export default GeneralPage
