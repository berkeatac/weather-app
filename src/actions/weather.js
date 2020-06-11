import { GET_WEATHER_DATA } from "../constants/actionTypes";

const getWeatherData = (data) => ({
  type: GET_WEATHER_DATA,
  data,
});

function fetchWeatherData() {
  return function (dispatch) {
    return fetch(
      "http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=75f972b80e26f14fe6c920aa6a85ad57&cnt=40"
    )
      .then((response) => response.json())
      .then(
        (data) => dispatch(getWeatherData(data))
        // (error) => dispatch(),
      );
  };
}

// eslint-disable-next-line import/prefer-default-export
export { fetchWeatherData };
