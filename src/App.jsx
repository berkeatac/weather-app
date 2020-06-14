import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import {
  fetchMetricWeatherData,
  fetchImperialWeatherData,
} from "./actions/weather";
import WeatherCardRow from "./components/WeatherCardRow";
import NavigationRow from "./components/NavigationRow";
import WeatherChart from "./components/WeatherChart";
import CheckboxRow from "./components/CheckboxRow";
import ErrorDisplay from "./components/ErrorDisplay";
import Spinner from "./components/Spinner";

const App = ({ getMetricWeather, getImperialWeather, loading, error }) => {
  useEffect(() => {
    getMetricWeather();
    getImperialWeather();
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
  getMetricWeather: () => {},
  getImperialWeather: () => {},
  loading: true,
  error: false,
};

App.propTypes = {
  getMetricWeather: PropTypes.func,
  getImperialWeather: PropTypes.func,
  loading: PropTypes.bool,
  error: PropTypes.string,
};

const mapStateToProps = (state) => ({
  loading: state.weatherState.loading,
  error: state.weatherState.error,
});

const mapDispatchToProps = (dispatch) => ({
  getImperialWeather: (unit) => dispatch(fetchMetricWeatherData(unit)),
  getMetricWeather: (unit) => dispatch(fetchImperialWeatherData(unit)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
