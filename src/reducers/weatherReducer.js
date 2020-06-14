import {
  GET_WEATHER_DATA,
  CHANGE_UNIT,
  SET_SELECTED_CARD,
  SET_ERROR_MESSAGE,
} from "../constants/actionTypes";

import { IMPERIAL } from "../constants";

const INITIAL_STATE = {
  loading: true,
  error: "",
  data: { imperial: [], metric: [] },
  leftIndex: 0,
  selectedCard: "",
  unit: IMPERIAL,
};

function weatherReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_ERROR_MESSAGE:
      return { ...state, error: action.error, loading: false };
    case GET_WEATHER_DATA:
      return {
        ...state,
        data: {
          ...state.data,
          [action.unit]: action.data,
        },
        loading: false,
        selectedCard: Object.keys(action.data)[0],
      };
    case CHANGE_UNIT:
      return { ...state, unit: action.unit };
    case SET_SELECTED_CARD:
      return { ...state, selectedCard: action.day };
    default:
      return state;
  }
}

export default weatherReducer;
