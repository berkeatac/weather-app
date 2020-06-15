/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import renderer from "react-test-renderer";

import WeatherCardRow from "./index";
import { IMPERIAL } from "../../constants";

const mockStore = configureStore([]);

describe("WeatherCardRow", () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      weatherState: {
        data: {
          [IMPERIAL]: {
            "1": { "1": 1, "2": 2, "3": 3 },
            "2": { "1": 1, "2": 2, "3": 3 },
            "3": { "1": 1, "2": 2, "3": 3 },
          },
        },
        unit: IMPERIAL,
      },
      navigationState: {
        leftIndex: 0,
        cardAmount: 2,
      },
    });

    store.dispatch = jest.fn();

    component = renderer.create(
      <Provider store={store}>
        <WeatherCardRow />
      </Provider>
    );
  });

  it("WeatherCardRow next button calls action", () => {
    renderer.act(() => {
      component.root.findAllByProps({ id: "card-action" })[1].props.onClick();
    });

    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });

  it("WeatherCardRow renders correct amount of cards", () => {
    expect(
      component.root.findAllByProps({ id: "weather-card" }).length
    ).toEqual(2);
  });
});
