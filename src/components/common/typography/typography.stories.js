import React, { Fragment } from 'react'
import styled from 'styled-components'

import { storiesOf } from '@storybook/react'
import { boolean, text, select, withKnobs } from '@storybook/addon-knobs'
import { BodyText } from '@common/typography/index'
import { colors } from '@styles'

import { DisplayText } from './index'

export const Wrapper = styled.div`
  border: 1px solid black;
`

storiesOf('Tyopgraphy')
  .addDecorator(withKnobs())
  .add('Display Text', () => (
    <Fragment>
      <p>The black border is only for indication</p>
      <Wrapper>
        <DisplayText
          as={select('HTML tag', [
            'span',
            'p',
            'h1',
            'h2',
            'h3',
            'h4',
            'h5',
            'h6'
          ])}
          weight={select('Weight', ['bold', 'normal', null], 'normal')}
          color={select('Color', Object.values(colors), '#3c3c3c')}
          noMargin={boolean('No Margin', false)}
        >
          {text('Name', 'This is a text')}
        </DisplayText>
      </Wrapper>
      <Wrapper>
        <BodyText
          as={select('HTML tag', ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])}
          weight={select('Weight', ['bold', 'normal'], 'normal')}
          color={select('Color', Object.values(colors), '#3c3c3c')}
          noMargin={boolean('No Margin', false)}
        >
          {text('Name', 'This is a text')}
        </BodyText>
      </Wrapper>
    </Fragment>
  ))
