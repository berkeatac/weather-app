import moment from "moment";

const getAverageTemp = (temp) => {
  const values = Object.values(temp);
  return temp
    ? (
        values.reduce((prev, cur) => prev + cur, 0).toFixed(0) / values.length
      ).toFixed(1)
    : 0;
};

const getMinTemp = (temp) => {
  return Math.min(...Object.values(temp)).toFixed(1);
};

const getMaxTemp = (temp) => {
  return Math.max(...Object.values(temp)).toFixed(1);
};

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

export { getAverageTemp, getMinTemp, getMaxTemp, organizeWeatherData };
