import React from 'react'

import Enzyme, { shallow } from 'enzyme'

import Adapter from 'enzyme-adapter-react-16'

import Header from './Header'

Enzyme.configure({adapter: new Adapter()})


describe("When Header renders", () => {
    it("displays a heading", () => {
      const header = shallow(<Header />)
      const homeHeader = header.find("h1").first()
      expect(homeHeader.text()).toEqual("Path Unknown")
    })
  })