import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import ErrorDisplay from "./index";

const mockStore = configureStore([]);

describe("ErrorDisplay", () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      error: "Error message",
    });

    component = shallow(
      <Provider store={store}>
        <ErrorDisplay />
      </Provider>
    );
  });

  it("ErrorDisplay renders", () => {
    expect(component.exists()).toEqual(true);
  });
});
