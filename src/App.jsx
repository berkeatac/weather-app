import React from "react";
import PropTypes from "prop-types";

const App = ({ title }) => <div>{title}</div>;

export default App;

App.defaultProps = {
  title: "Weather App",
};

App.propTypes = {
  title: PropTypes.string,
};
