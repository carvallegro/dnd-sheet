import React from 'react'
import { shallow } from 'enzyme'

import Money from './index'

describe('<Money />', () => {
  it('renders', () => {
    const wrapper = shallow(<Money />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders with value', () => {
    const wrapper = shallow(<Money value={100} name="TC" />)
    expect(wrapper).toMatchSnapshot()
  })
})
