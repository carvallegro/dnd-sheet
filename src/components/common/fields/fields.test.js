import React from 'react'
import { mount } from 'enzyme'

import Checkbox from './checkbox'
import { SIZES } from '@styles'

// WAITING FOR ENZYME+HOOKS - Form Fields
describe('Form Fields', () => {
  describe('<Checkbox />', () => {
    it('renders', () => {
      const wrapper = mount(<Checkbox name="Test name" />)
      expect(wrapper).toMatchSnapshot()
    })

    it('renders with props', () => {
      const wrapper = mount(
        <Checkbox name="Test name" size={SIZES.medium} checked />
      )
      expect(wrapper).toMatchSnapshot()
    })
  })
})
