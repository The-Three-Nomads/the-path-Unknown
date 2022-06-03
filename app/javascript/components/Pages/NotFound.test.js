import React from 'react'

import Enzyme, { shallow } from 'enzyme'

import Adapter from 'enzyme-adapter-react-16'

import NotFound from './NotFound'

Enzyme.configure({adapter: new Adapter()})


describe("When NotFound renders", () => {
    it("displays a heading", () => {
      const notfound = shallow(<NotFound />)
      const homeNotFound = notfound.find("h1").first()
      expect(homeNotFound.text()).toEqual("Not Found")
    })
  })