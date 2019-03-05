import React from 'react'
import { shallow } from 'enzyme'

import PageTitle from './index'

describe('<PageTitle />', () => {
  it('renders', () => {
    const wrapper = shallow(<PageTitle>Test</PageTitle>)
    expect(wrapper).toMatchSnapshot()
  })
})
