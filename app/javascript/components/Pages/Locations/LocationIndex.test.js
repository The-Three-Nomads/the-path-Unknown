import React from 'react'

import Enzyme, { shallow } from 'enzyme'

import Adapter from 'enzyme-adapter-react-16'

import LocationIndex from './LocationIndex'

Enzyme.configure({ adapter: new Adapter() })

describe("When LocationIndex renders", () => {
  it("displays a heading", () => {
    const locationIndex = shallow(<LocationIndex />)
    const locationIndexHeading = locationIndex.find("h4")
    expect(locationIndexHeading.text()).toEqual("All Locations")
  })
})
