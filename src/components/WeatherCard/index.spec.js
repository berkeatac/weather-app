import React from "react";
import { mount } from "enzyme";

import WeatherCard from "./index";

describe("WeatherCard", () => {
  it("WeatherCard title renders", () => {
    const wrapper = mount(<WeatherCard />);

    expect(wrapper.find("h2").text()).toEqual("date");
  });

  it("WeatherCard renders min max and average temperatures", () => {
    const wrapper = mount(
      <WeatherCard temps={{ "19 Jun 20": 10, "20 Jun 20": 20 }} />
    );

    expect(wrapper.find("p").length).toEqual(2);
  });
});
