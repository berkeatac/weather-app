import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import WeatherChart from "./index";

const mockStore = configureStore([]);

describe("ErrorDisplay", () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({});

    component = shallow(
      <Provider store={store}>
        <WeatherChart />
      </Provider>
    );
  });

  it("WeatherChart renders", () => {
    expect(component.exists()).toEqual(true);
  });
});
