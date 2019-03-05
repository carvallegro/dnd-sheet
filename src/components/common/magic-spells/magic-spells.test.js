import React from 'react'
import { shallow } from 'enzyme'

import MagicSpells from './index'

describe('<MagicSpells />', () => {
  it('renders', () => {
    const wrapper = shallow(<MagicSpells />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders with props', () => {
    const wrapper = shallow(
      <MagicSpells spellLevel={1} slotExtended={2} slotTotal={3} />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders with grid props', () => {
    const wrapper = shallow(<MagicSpells gridArea="testArea" columns={3} />)
    expect(wrapper).toMatchSnapshot()
  })
})
