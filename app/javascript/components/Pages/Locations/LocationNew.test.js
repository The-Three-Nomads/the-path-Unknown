import React from "react";

import Enzyme, { shallow } from "enzyme";

import Adapter from "enzyme-adapter-react-16";

import LocationNew from "./LocationNew";

Enzyme.configure({ adapter: new Adapter() });

let current_user = {
  id: 2,
  email: "testingemail@example.com",
  created_at: "2022-05-26T20:33:13.189Z",
  updated_at: "2022-05-26T20:33:13.189Z",
};

describe("When LocationNew renders", () => {
  it("displays a heading", () => {
    const locationNew = shallow(<LocationNew current_user={current_user} />);
    const locationNewHeadingText = locationNew.find("h4");
    expect(locationNewHeadingText.text()).toEqual("Create a New Path");
  });
  it("displays a form", () => {
    const locationNew = shallow(<LocationNew current_user={current_user} />);
    const formGroup = locationNew.find("FormGroup");
    expect(formGroup.length).toEqual(11);
  });
});
