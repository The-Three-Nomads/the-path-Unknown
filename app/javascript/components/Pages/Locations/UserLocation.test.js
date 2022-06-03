import React from "react";

import Enzyme, { shallow } from "enzyme";

import Adapter from "enzyme-adapter-react-16";

import UserLocationIndex from "./UserLocation";

Enzyme.configure({ adapter: new Adapter() });

describe("When LocationIndex renders", () => {
  it("displays a heading", () => {
    const locationIndex = shallow(<UserLocationIndex />);
    const locationIndexHeading = locationIndex.find("h4");
    expect(locationIndexHeading.text()).toEqual("Your Path Listings");
  });
});
