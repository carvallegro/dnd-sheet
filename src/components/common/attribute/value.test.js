import React from 'react'
import { shallow } from 'enzyme'

import Value from './value'

describe('<Value />', () => {
  it('renders', () => {
    const wrapper = shallow(<Value value={1} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders with negative value', () => {
    const wrapper = shallow(<Value value={-2} />)
    expect(wrapper).toMatchSnapshot()
  })
})
