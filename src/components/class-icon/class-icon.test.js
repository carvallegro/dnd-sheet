import _ from 'lodash'
import React from 'react'
import { shallow } from 'enzyme'

import classes from '../../enums/classes'

import ClassIcon from './index'

describe('<ClassIcon />', () => {
  it('should render', () => {
    const wrapper = shallow(<ClassIcon />)
    expect(wrapper).toMatchSnapshot()
  })

  _(classes)
    .values()
    .forEach(c =>
      it(`should render ${c} icon`, () => {
        const wrapper = shallow(<ClassIcon classEnum={c} />)
        expect(wrapper).toMatchSnapshot()
      })
    )
})
