import { GET_WEATHER_DATA } from "../constants/actionTypes";

const INITIAL_STATE = [];

function weatherReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_WEATHER_DATA:
      console.log("HELLO");
      return state;
    default:
      return state;
  }
}

export default weatherReducer;
