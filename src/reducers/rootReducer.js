import { combineReducers } from "redux";

import weatherReducer from "./weather";
import navigationReducer from "./navigate";

const rootReducer = combineReducers({
  navigationState: navigationReducer,
  weatherState: weatherReducer,
});

export default rootReducer;
