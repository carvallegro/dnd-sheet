import React from 'react'
import { shallow } from 'enzyme'

import Modifier from './modifier'

describe('<Modifier />', () => {
  it('renders', () => {
    const wrapper = shallow(<Modifier />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders with negative value', () => {
    const wrapper = shallow(<Modifier value={-2} />)
    expect(wrapper).toMatchSnapshot()
  })
})
