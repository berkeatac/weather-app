import navigationReducer from "./navigationReducer";
import weatherReducer from "./weatherReducer";

import {
  GO_NEXT_PAGE,
  GO_PREVIOUS_PAGE,
  SET_WEATHER_CARD_AMOUNT,
  CHANGE_UNIT,
  SET_SELECTED_CARD,
  SET_ERROR_MESSAGE,
} from "../constants/actionTypes";

import { IMPERIAL, METRIC } from "../constants";

describe("Reducer Tests", () => {
  describe("Navigation Reducer", () => {
    it("should go to next page", () => {
      const state = { leftIndex: 0, cardAmount: 0 };
      const newState = navigationReducer(state, {
        type: GO_NEXT_PAGE,
      });

      expect(newState).toEqual({ leftIndex: 1, cardAmount: 0 });
    });

    it("should go to previous page", () => {
      const state = { leftIndex: 2, cardAmount: 0 };
      const newState = navigationReducer(state, {
        type: GO_PREVIOUS_PAGE,
      });

      expect(newState).toEqual({ leftIndex: 1, cardAmount: 0 });
    });

    it("should set card amount", () => {
      const state = { leftIndex: 0, cardAmount: 0 };
      const newState = navigationReducer(state, {
        type: SET_WEATHER_CARD_AMOUNT,
        amount: 3,
      });

      expect(newState).toEqual({ leftIndex: 0, cardAmount: 3 });
    });
  });

  describe("Weather Reducer", () => {
    it("should set unit to metric", () => {
      const state = { unit: IMPERIAL };
      const newState = weatherReducer(state, {
        type: CHANGE_UNIT,
        unit: METRIC,
      });

      expect(newState).toEqual({ unit: METRIC });
    });

    it("should set selected card", () => {
      const state = { selectedCard: "" };
      const newState = weatherReducer(state, {
        type: SET_SELECTED_CARD,
        day: "20 Jun 20",
      });

      expect(newState).toEqual({ selectedCard: "20 Jun 20" });
    });

    it("should set error message", () => {
      const state = { error: "" };
      const newState = weatherReducer(state, {
        type: SET_ERROR_MESSAGE,
        error: "There is an error",
      });

      expect(newState).toEqual({ error: "There is an error", loading: false });
    });
  });
});
