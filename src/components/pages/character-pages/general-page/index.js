import React, { Fragment } from 'react'
import Card from '../../../common/card'
import Attributes, { AttributesWrapper } from '@character-elements/attributes'
import Skills from '../../../character-elements/skills'

const GeneralPage = () => (
  <Fragment>
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
