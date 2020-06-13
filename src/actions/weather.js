import moment from "moment";

import { GET_WEATHER_DATA, CHANGE_UNIT } from "../constants/actionTypes";

const getWeatherData = (data) => ({
  type: GET_WEATHER_DATA,
  data,
});

const setWeatherUnit = (unit) => ({
  type: CHANGE_UNIT,
  unit,
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

const fetchWeatherData = (unit = "fahrenheit") => {
  const unitQuery = unit === "fahrenheit" ? "imperial" : "metric";
  return (dispatch) => {
    return fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=75f972b80e26f14fe6c920aa6a85ad57&cnt=40&units=${unitQuery}`
    )
      .then((response) => response.json())
      .then(
        (data) => {
          const dailyData = organizeWeatherData(data);
          dispatch(getWeatherData(dailyData));
        }
        // (error) => dispatch(),
      );
  };
};

export { fetchWeatherData, setWeatherUnit };
