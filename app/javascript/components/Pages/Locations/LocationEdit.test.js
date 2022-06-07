import React from "react";

import Enzyme, { shallow } from "enzyme";

import Adapter from "enzyme-adapter-react-16";

import LocationEdit from "./LocationEdit";

Enzyme.configure({ adapter: new Adapter() });

let current_user = {
  id: 2,
  email: "testingemail@example.com",
  created_at: "2022-05-26T20:33:13.189Z",
  updated_at: "2022-05-26T20:33:13.189Z",
};

describe("When locationEdit renders", () => {
    it("displays a form", () => {
        const locationEdit = shallow(<LocationEdit current_user={current_user} />);
        const formGroup = locationEdit.find("FormGroup");
        expect(formGroup.length).toEqual(11);
    });
});
