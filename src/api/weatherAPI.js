const fetchWeather = (unit) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=75f972b80e26f14fe6c920aa6a85ad57&cnt=40&units=${unit}`
  ).then((response) => response.json());
};

export default fetchWeather;
