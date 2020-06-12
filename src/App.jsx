import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
// import FormLabel from "@material-ui/core/FormLabel";
// import FormControl from "@material-ui/core/FormControl";
// import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import IconButton from "@material-ui/core/IconButton";

import { fetchWeatherData } from "./actions/weather";
import WeatherCard from "./components/WeatherCard";

const App = ({ title, getWeather, list }) => {
  useEffect(() => {
    getWeather();
    console.log(list);
  }, []);

  return (
    <Container>
      <CssBaseline />
      <Grid container spacing={3}>
        <Grid container item xs={12}>
          <Grid item xs={6} justify="center" align="center">
            <FormControlLabel
              control={<Checkbox name="celcius" checked />}
              label="Celcius"
            />
          </Grid>
          <Grid item xs={6} justify="center" align="center">
            <FormControlLabel
              control={<Checkbox name="fahrenheit" />}
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
          <WeatherCard title={title} />
        </Grid>
        <Grid item xs={4}>
          <WeatherCard title={title} />
        </Grid>
        <Grid item xs={4}>
          <WeatherCard title={title} />
        </Grid>
      </Grid>
    </Container>
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
