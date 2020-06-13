/* eslint-disable react/jsx-wrap-multilines */
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

import {
  fetchMetricWeatherData,
  fetchImperialWeatherData,
  setWeatherUnit,
} from "./actions/weather";
import WeatherCardRow from "./components/WeatherCardRow";
import NavigationRow from "./components/NavigationRow";

const App = ({ getMetricWeather, getImperialWeather, setUnit, unit }) => {
  useEffect(() => {
    getMetricWeather();
    getImperialWeather();
    // console.log(loading);
  }, []);

  return (
    <Container style={{ marginTop: 40 }}>
      <CssBaseline />
      <Grid container spacing={3}>
        <Grid container item xs={12}>
          <Grid item xs={6} align="center">
            <FormControlLabel
              control={
                <Checkbox
                  name="metric"
                  checked={unit === "metric"}
                  onClick={() => setUnit("metric")}
                />
              }
              label="Celcius"
            />
          </Grid>
          <Grid item xs={6} align="center">
            <FormControlLabel
              control={
                <Checkbox
                  name="imperial"
                  checked={unit === "imperial"}
                  onClick={() => setUnit("imperial")}
                />
              }
              label="Fahrenheit"
            />
          </Grid>
        </Grid>
        <NavigationRow />
        <WeatherCardRow />
      </Grid>
    </Container>
  );
};

App.defaultProps = {
  getMetricWeather: () => {},
  getImperialWeather: () => {},
  setUnit: () => {},
  // loading: true,
  unit: "imperial",
};

App.propTypes = {
  getMetricWeather: PropTypes.func,
  getImperialWeather: PropTypes.func,
  setUnit: PropTypes.func,
  // loading: PropTypes.bool,
  unit: PropTypes.string,
};

const mapStateToProps = (state) => ({
  // loading: state.loading,
  unit: state.weatherState.unit,
});

const mapDispatchToProps = (dispatch) => ({
  getImperialWeather: (unit) => dispatch(fetchMetricWeatherData(unit)),
  getMetricWeather: (unit) => dispatch(fetchImperialWeatherData(unit)),
  setUnit: (unit) => dispatch(setWeatherUnit(unit)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
