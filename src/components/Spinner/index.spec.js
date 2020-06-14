import React from "react";
import { shallow } from "enzyme";

import Spinner from "./index";

describe("Spinner", () => {
  it("Spinner renders", () => {
    const wrapper = shallow(<Spinner />);

    expect(wrapper.exists()).toEqual(true);
  });
});
