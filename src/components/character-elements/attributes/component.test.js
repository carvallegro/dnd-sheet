import React from 'react'
import { shallow } from 'enzyme'

import Attributes from './index'

describe('<Attributes />', () => {
  it('renders', () => {
    const wrapper = shallow(<Attributes attributes={[]} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders with an attribute', () => {
    const wrapper = shallow(
      <Attributes attributes={[{ name: 'TestAT', base: 12, modifier: 1 }]} />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
