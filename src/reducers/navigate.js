import {
  GO_NEXT_PAGE,
  GO_PREVIOUS_PAGE,
  SET_WEATHER_CARD_AMOUNT,
} from "../constants/actionTypes";

const INITIAL_STATE = {
  leftIndex: 0,
  cardAmount: 0,
};

function navigationReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GO_NEXT_PAGE:
      return { ...state, leftIndex: state.leftIndex + 1 };
    case GO_PREVIOUS_PAGE:
      return { ...state, leftIndex: state.leftIndex - 1 };
    case SET_WEATHER_CARD_AMOUNT:
      return { ...state, cardAmount: action.amount };
    default:
      return state;
  }
}

export default navigationReducer;
