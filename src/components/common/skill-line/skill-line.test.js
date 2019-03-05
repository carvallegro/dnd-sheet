import React from 'react'
import { shallow } from 'enzyme'

import { SkillLine, SkillGrid } from './index'

describe('<SkillLine />', () => {
  it('renders', () => {
    const wrapper = shallow(<SkillLine />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders with props', () => {
    const wrapper = shallow(
      <SkillLine
        value={10}
        name={'Test Skill'}
        attribute={'TST'}
        isProficientw
      />
    )
    expect(wrapper).toMatchSnapshot()
  })
})

describe('<SkillGrid />', () => {
  it('renders', () => {
    const wrapper = shallow(<SkillGrid />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders with rows', () => {
    const wrapper = shallow(<SkillGrid rows={2} />)
    expect(wrapper).toMatchSnapshot()
  })
})
