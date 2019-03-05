import React from 'react'
import { shallow } from 'enzyme'

import Spell from './spell'

describe('<Spell />', () => {
  it('renders', () => {
    const wrapper = shallow(<Spell />)
    expect(wrapper).toMatchSnapshot()
  })
})
