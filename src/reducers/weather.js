import { GET_WEATHER_DATA, CHANGE_UNIT } from "../constants/actionTypes";

const INITIAL_STATE = {
  loading: true,
  data: { imperial: [], metric: [] },
  leftIndex: 0,
  selectedData: {},
  unit: "imperial",
};

function weatherReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_WEATHER_DATA:
      return {
        ...state,
        data: { ...state.data, [action.unit]: action.data },
        loading: false,
      };
    case CHANGE_UNIT:
      return { ...state, unit: action.unit };
    default:
      return state;
  }
}

export default weatherReducer;
