import React from 'react'

import Enzyme, { shallow } from 'enzyme'

import Adapter from 'enzyme-adapter-react-16'

import LocationShow from './LocationShow'

Enzyme.configure({ adapter: new Adapter() })

describe("When LocationShow renders", () => {
  it("displays a heading", () => {
    const locationShow = shallow(<LocationShow />)
    const locationShowHeading = locationShow.find("h1")
    expect(locationShowHeading.text()).toEqual("Find Your Next Path")
  })
})
