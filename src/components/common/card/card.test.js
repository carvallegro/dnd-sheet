import React from 'react'
import { shallow } from 'enzyme'

import Card from './index'

describe('<Card />', () => {
  it('renders', () => {
    const wrapper = shallow(<Card />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders with title', () => {
    const wrapper = shallow(<Card title="test title" />)
    expect(wrapper).toMatchSnapshot()
  })
})
