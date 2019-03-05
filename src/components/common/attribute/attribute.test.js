import React from 'react'
import { shallow } from 'enzyme'

import Attribute from './index'

describe('<Attribute />', () => {
  it('renders', () => {
    const wrapper = shallow(<Attribute />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders with values', () => {
    const wrapper = shallow(<Attribute value={10} modifier={2} name="Test" />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders with negative modifier', () => {
    const wrapper = shallow(<Attribute modifier={-2} />)
    expect(wrapper).toMatchSnapshot()
  })
})
