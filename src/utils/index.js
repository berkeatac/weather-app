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

export { getAverageTemp, getMinTemp, getMaxTemp };
