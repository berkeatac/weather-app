/* eslint-disable react/jsx-wrap-multilines */
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import IconButton from "@material-ui/core/IconButton";

import { fetchWeatherData, setWeatherUnit } from "./actions/weather";
import WeatherCard from "./components/WeatherCard";

const App = ({ getWeather, setUnit, list, loading, unit }) => {
  useEffect(() => {
    console.log(loading);
    getWeather();
    console.log(list);
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
        <Grid
          container
          item
          xs={12}
          justify="space-between"
          alignItems="center"
        >
          <IconButton>
            <NavigateBeforeIcon style={{ fontSize: 40 }} />
          </IconButton>

          <IconButton>
            <NavigateNextIcon style={{ fontSize: 40 }} />
          </IconButton>
        </Grid>
        <Grid item xs={4}>
          <WeatherCard />
        </Grid>
        <Grid item xs={4}>
          <WeatherCard />
        </Grid>
        <Grid item xs={4}>
          <WeatherCard />
        </Grid>
      </Grid>
    </Container>
  );
};

App.defaultProps = {
  getWeather: () => {},
  setUnit: () => {},
  list: [],
  loading: true,
  unit: "fahrenheit",
};

App.propTypes = {
  getWeather: PropTypes.func,
  setUnit: PropTypes.func,
  list: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
  unit: PropTypes.string,
};

const mapStateToProps = (state) => ({
  list: state.data.list,
  loading: state.loading,
  unit: state.unit,
});

const mapDispatchToProps = (dispatch) => ({
  getWeather: () => dispatch(fetchWeatherData()),
  setUnit: (unit) => dispatch(setWeatherUnit(unit)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
