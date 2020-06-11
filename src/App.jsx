import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getWeatherData } from "./actions/weather";

const App = ({ title, getWeather }) => {
  useEffect(() => {
    getWeather();
  }, []);

  return <div>{title}</div>;
};

App.defaultProps = {
  title: "Weather App",
  getWeather: () => {},
};

App.propTypes = {
  title: PropTypes.string,
  getWeather: PropTypes.func,
};

const mapStateToProps = () => ({
  //
});

const mapDispatchToProps = (dispatch) => ({
  getWeather: () => dispatch(getWeatherData),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
