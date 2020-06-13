import moment from "moment";

import {
  GET_WEATHER_DATA,
  CHANGE_UNIT,
  SET_SELECTED_CARD,
} from "../constants/actionTypes";
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
    return fetchWeather("imperial").then(
      (data) => {
        const dailyData = organizeWeatherData(data);
        dispatch(getWeatherData(dailyData, "imperial"));
      }
      // (error) => dispatch(),
    );
  };
};

const fetchMetricWeatherData = () => {
  return (dispatch) => {
    return fetchWeather("metric").then(
      (data) => {
        const dailyData = organizeWeatherData(data);
        dispatch(getWeatherData(dailyData, "metric"));
      }
      // (error) => dispatch(),
    );
  };
};

export {
  setWeatherUnit,
  fetchMetricWeatherData,
  fetchImperialWeatherData,
  setSelectedCard,
};
