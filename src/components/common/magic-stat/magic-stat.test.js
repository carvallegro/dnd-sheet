import React from 'react'
import { shallow } from 'enzyme'

import MagicStat from './index'

describe('<MagicStat />', () => {
  it('renders', () => {
    const wrapper = shallow(<MagicStat />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders with props', () => {
    const wrapper = shallow(<MagicStat name="Test stat" value={10} />)
    expect(wrapper).toMatchSnapshot()
  })
})
