import React from 'react'
import { ThemeProvider } from 'styled-components'

import { configure, addDecorator } from '@storybook/react';

import {defaultTheme} from '@styles/theme'

addDecorator(storyFn => <ThemeProvider theme={defaultTheme}>{storyFn()}</ThemeProvider>)

const req = require.context('../src/components/', true, /stories\.js$/)

function loadStories() {
  req.keys().forEach(req)
}

configure(loadStories, module)
