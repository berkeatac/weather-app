import moment from "moment";

import {
  GET_WEATHER_DATA,
  CHANGE_UNIT,
  SET_SELECTED_CARD,
  SET_ERROR_MESSAGE,
} from "../constants/actionTypes";
import { IMPERIAL, METRIC, SUCCESS_CODE } from "../constants";
import fetchWeather from "../api/weatherAPI";

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

// Creates hour to temp object
const organizeWeatherData = (data) => {
  const dailyData = {};
  data.list.forEach((item) => {
    dailyData[moment(item.dt_txt).format("DD MMM YY")] = {
      ...dailyData[moment(item.dt_txt).format("DD MMM YY")],
      [moment(item.dt_txt).format("HH:mm")]: item.main.temp,
    };
  });

  return dailyData;
};

const fetchImperialWeatherData = () => {
  return (dispatch) => {
    return fetchWeather(IMPERIAL).then(
      (data) => {
        if (data.cod === SUCCESS_CODE) {
          const dailyData = organizeWeatherData(data);
          dispatch(getWeatherData(dailyData, IMPERIAL));
        } else {
          dispatch(setErrorMessage(data.message.toString()));
        }
      },
      (error) => dispatch(setErrorMessage(error.message.toString()))
    );
  };
};

const fetchMetricWeatherData = () => {
  return (dispatch) => {
    return fetchWeather(METRIC).then(
      (data) => {
        if (data.cod === SUCCESS_CODE) {
          const dailyData = organizeWeatherData(data);
          dispatch(getWeatherData(dailyData, METRIC));
        } else {
          dispatch(setErrorMessage(data.message.toString()));
        }
      },
      (error) => dispatch(setErrorMessage(error.message.toString()))
    );
  };
};

export {
  setWeatherUnit,
  fetchMetricWeatherData,
  fetchImperialWeatherData,
  setSelectedCard,
};
