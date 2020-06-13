/* eslint-disable react/jsx-wrap-multilines */
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

import { fetchWeatherData, setWeatherUnit } from "./actions/weather";
import WeatherCardRow from "./components/WeatherCardsRow";
import NavigationRow from "./components/NavigationRow";

const App = ({ getWeather, setUnit, unit }) => {
  useEffect(() => {
    getWeather(unit);
    // console.log(loading);
  }, [unit]);

  return (
    <Container style={{ marginTop: 40 }}>
      <CssBaseline />
      <Grid container spacing={3}>
        <Grid container item xs={12}>
          <Grid item xs={6} align="center">
            <FormControlLabel
              control={
                <Checkbox
                  name="celcius"
                  checked={unit === "celcius"}
                  onClick={() => setUnit("celcius")}
                />
              }
              label="Celcius"
            />
          </Grid>
          <Grid item xs={6} align="center">
            <FormControlLabel
              control={
                <Checkbox
                  name="fahrenheit"
                  checked={unit === "fahrenheit"}
                  onClick={() => setUnit("fahrenheit")}
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
  getWeather: () => {},
  setUnit: () => {},
  // loading: true,
  unit: "fahrenheit",
};

App.propTypes = {
  getWeather: PropTypes.func,
  setUnit: PropTypes.func,
  // loading: PropTypes.bool,
  unit: PropTypes.string,
};

const mapStateToProps = (state) => ({
  // loading: state.loading,
  unit: state.weatherState.unit,
});

const mapDispatchToProps = (dispatch) => ({
  getWeather: (unit) => dispatch(fetchWeatherData(unit)),
  setUnit: (unit) => dispatch(setWeatherUnit(unit)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
