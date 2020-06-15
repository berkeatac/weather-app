/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import renderer from "react-test-renderer";

import NavigationRow from "./index";

const mockStore = configureStore([]);

describe("NavigationRow", () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      weatherState: {
        data: { 1: 1, 2: 2, 3: 3, 4: 4, 5: 5 },
      },
      navigationState: {
        leftIndex: 0,
        cardAmount: 2,
      },
    });

    store.dispatch = jest.fn();

    component = renderer.create(
      <Provider store={store}>
        <NavigationRow />
      </Provider>
    );
  });

  it("NavigationRow initial left button is hidden", () => {
    expect(
      component.root.findByProps({ id: "leftButton" }).props.style.visibility
    ).toEqual("hidden");
  });

  it("CheckboxRow next button calls action", () => {
    renderer.act(() => {
      component.root.findByProps({ id: "rightButton" }).props.onClick();
    });

    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });
});
