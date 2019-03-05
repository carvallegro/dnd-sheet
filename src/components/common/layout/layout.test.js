import React from 'react'
import { shallow } from 'enzyme'

import { DISPLAY_MODE, GridArea, Page } from './index'
import { HalfWidth } from '@common/layout/index'

describe('<GridArea />', () => {
  it('renders', () => {
    const wrapper = shallow(<GridArea />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders with Props', () => {
    const wrapper = shallow(<GridArea gridArea="tes ARea" />)
    expect(wrapper).toMatchSnapshot()
  })
})

describe('<Page />', () => {
  it('renders in print mode', () => {
    const wrapper = shallow(
      <Page theme={{ displayMode: DISPLAY_MODE.print }} />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders in web mode', () => {
    const wrapper = shallow(<Page theme={{ displayMode: DISPLAY_MODE.web }} />)
    expect(wrapper).toMatchSnapshot()
  })
})

describe('<HalfWidth />', () => {
  it('renders', () => {
    const wrapper = shallow(<HalfWidth />)
    expect(wrapper).toMatchSnapshot()
  })
})
