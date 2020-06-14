import {
  GET_WEATHER_DATA,
  CHANGE_UNIT,
  SET_SELECTED_CARD,
  SET_ERROR_MESSAGE,
} from "../constants/actionTypes";
import { SUCCESS_CODE } from "../constants";
import fetchWeather from "../api/weatherAPI";
import { organizeWeatherData } from "../utils";

const getWeatherData = (data, unit) => ({
  type: GET_WEATHER_DATA,
  data,
  unit,
});

const setWeatherUnit = (unit) => ({
  type: CHANGE_UNIT,
  unit,
});

const setSelectedCard = (day) => ({
  type: SET_SELECTED_CARD,
  day,
});

const setErrorMessage = (message) => ({
  type: SET_ERROR_MESSAGE,
  error: message,
});

const fetchWeatherData = (unit) => {
  return (dispatch) => {
    return fetchWeather(unit).then(
      (data) => {
        if (data.cod === SUCCESS_CODE) {
          const dailyData = organizeWeatherData(data);
          dispatch(getWeatherData(dailyData, unit));
        } else {
          dispatch(setErrorMessage(data.message.toString()));
        }
      },
      (error) => dispatch(setErrorMessage(error.message.toString()))
    );
  };
};

export { setWeatherUnit, fetchWeatherData, setSelectedCard };
