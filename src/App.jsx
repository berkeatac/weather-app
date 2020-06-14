import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import CircularProgress from "@material-ui/core/CircularProgress";

import {
  fetchMetricWeatherData,
  fetchImperialWeatherData,
} from "./actions/weather";
import WeatherCardRow from "./components/WeatherCardRow";
import NavigationRow from "./components/NavigationRow";
import WeatherChart from "./components/WeatherChart";
import CheckboxRow from "./components/CheckboxRow";

const App = ({ getMetricWeather, getImperialWeather, loading }) => {
  useEffect(() => {
    getMetricWeather();
    getImperialWeather();
    // console.log(loading);
  }, []);

  return (
    <Container style={{ marginTop: 40 }}>
      {loading ? (
        <Grid container align="center">
          <Grid item xs={12} align="center">
            <CircularProgress />
          </Grid>
        </Grid>
      ) : (
        <Grid container spacing={3}>
          <CheckboxRow />
          <NavigationRow />
          <WeatherCardRow />
          <WeatherChart />
        </Grid>
      )}
    </Container>
  );
};

App.defaultProps = {
  getMetricWeather: () => {},
  getImperialWeather: () => {},
  loading: true,
};

App.propTypes = {
  getMetricWeather: PropTypes.func,
  getImperialWeather: PropTypes.func,
  loading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  loading: state.weatherState.loading,
});

const mapDispatchToProps = (dispatch) => ({
  getImperialWeather: (unit) => dispatch(fetchMetricWeatherData(unit)),
  getMetricWeather: (unit) => dispatch(fetchImperialWeatherData(unit)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
