import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { fetchWeatherData } from "./actions/weather";

const App = ({ title, getWeather, list }) => {
  useEffect(() => {
    getWeather();
  }, []);

  return (
    <div>
      {title}
      {list.map((data) => console.log(data.dt))}
    </div>
  );
};

App.defaultProps = {
  title: "Weather App",
  getWeather: () => {},
  list: [],
};

App.propTypes = {
  title: PropTypes.string,
  getWeather: PropTypes.func,
  list: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = (state) => ({
  list: state.list,
});

const mapDispatchToProps = (dispatch) => ({
  getWeather: () => dispatch(fetchWeatherData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
