import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
  ResponsiveContainer,
} from "recharts";
import Grid from "@material-ui/core/Grid";

const WeatherChart = ({ data }) => {
  const chartData = [];

  Object.entries(data).forEach(([hour, temp]) => {
    chartData.push({ hour, temp });
  });

  return (
    <Grid item xs={12} align="center">
      <ResponsiveContainer width="90%" height={250}>
        <BarChart height={250} data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="hour" />
          <YAxis width={30} />
          <Bar dataKey="temp" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </Grid>
  );
};

WeatherChart.defaultProps = {
  data: {},
};

WeatherChart.propTypes = {
  data: PropTypes.objectOf(PropTypes.number),
};

const mapStateToProps = (state) => ({
  data:
    state.weatherState.data[state.weatherState.unit][
      state.weatherState.selectedCard
    ],
});

export default connect(mapStateToProps, null)(WeatherChart);
