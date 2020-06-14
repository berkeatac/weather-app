import { combineReducers } from "redux";

import weatherReducer from "./weatherReducer";
import navigationReducer from "./navigationReducer";

const rootReducer = combineReducers({
  navigationState: navigationReducer,
  weatherState: weatherReducer,
});

export default rootReducer;
