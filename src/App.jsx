import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import WeatherCardRow from "./components/WeatherCardRow";
import NavigationRow from "./components/NavigationRow";
import WeatherChart from "./components/WeatherChart";
import CheckboxRow from "./components/CheckboxRow";
import ErrorDisplay from "./components/ErrorDisplay";
import Spinner from "./components/Spinner";

import { fetchWeatherData } from "./actions/weather";
import { IMPERIAL, METRIC } from "./constants";

const App = ({ getWeather, loading, error }) => {
  useEffect(() => {
    getWeather(IMPERIAL);
    getWeather(METRIC);
  }, []);

  if (error) return <ErrorDisplay />;

  return (
    <Container style={{ marginTop: 40 }}>
      {loading ? (
        <Spinner />
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
  getWeather: () => {},
  loading: true,
  error: false,
};

App.propTypes = {
  getWeather: PropTypes.func,
  loading: PropTypes.bool,
  error: PropTypes.string,
};

const mapStateToProps = (state) => ({
  loading: state.weatherState.loading,
  error: state.weatherState.error,
});

const mapDispatchToProps = (dispatch) => ({
  getWeather: (unit) => dispatch(fetchWeatherData(unit)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
