import React, { Fragment } from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { boolean, text, select, withKnobs } from '@storybook/addon-knobs'

import Tag from './index'
import { colors, SIZES } from '@styles'

const Wrapper = styled.div`
  padding: 6px;
`

storiesOf('Tag', module)
  .addDecorator(withKnobs())
  .add('default', () => (
    <Fragment>
      <Wrapper>
        <Tag>Default tag</Tag>
      </Wrapper>
      <Wrapper>
        <Tag color={colors.blue}>Blue tag</Tag>
      </Wrapper>
      <Wrapper>
        <Tag color={colors.purple}>Purple tag</Tag>
      </Wrapper>
    </Fragment>
  ))
  .add('custom', () => (
    <Tag
      color={select('Color', colors)}
      size={select('Size', SIZES)}
      reverse={boolean('Reverse', false)}
    >
      {text('Name', 'value')}
    </Tag>
  ))
