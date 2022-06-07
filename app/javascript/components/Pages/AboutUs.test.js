import React from 'react'

import Enzyme, { shallow } from 'enzyme'

import Adapter from 'enzyme-adapter-react-16'

import AboutUs from './AboutUs'

Enzyme.configure({adapter: new Adapter()})

describe("When AboutUs renders", () => {
    it("displays one Col", () => {
      const aboutus = shallow(<AboutUs />)
      const aboutusCards = aboutus.find("Col")
      expect(aboutusCards.length).toEqual(1)
    })
  })
  