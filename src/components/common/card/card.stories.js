import React from 'react'
import { storiesOf } from '@storybook/react'

import Card, { CardBody } from './index'

storiesOf('Card', module)
  .add('default', () => (
    <Card>
      <CardBody>I'm a Card</CardBody>
    </Card>
  ))
  .add('with title', () => (
    <Card title="... with a title">
      <CardBody>I'm a Card...</CardBody>
    </Card>
  ))
