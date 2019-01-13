import React, { Fragment } from 'react'
import Card from '../../../common/card'
import Attributes, { AttributesWrapper } from '@character-elements/attributes'

const GeneralPage = () => <Fragment>
  <Card title='Abilities'>
    <AttributesWrapper>
      <Attributes/>
    </AttributesWrapper>
  </Card>
</Fragment>

export default GeneralPage
