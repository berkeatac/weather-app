/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import renderer from "react-test-renderer";

import CheckboxRow from "./index";
import { IMPERIAL } from "../../constants";

const mockStore = configureStore([]);

describe("CheckboxRow", () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      weatherState: {
        unit: IMPERIAL,
      },
    });

    store.dispatch = jest.fn();

    component = renderer.create(
      <Provider store={store}>
        <CheckboxRow />
      </Provider>
    );
  });

  it("CheckboxRow unit click fires action", () => {
    renderer.act(() => {
      component.root.findAllByProps({ id: "unitCheckbox" })[0].props.onClick();
    });

    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });
});
