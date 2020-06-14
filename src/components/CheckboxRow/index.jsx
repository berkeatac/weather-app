/* eslint-disable react/jsx-wrap-multilines */
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import { setWeatherUnit } from "../../actions/weather";

const CheckboxRow = ({ unit, setUnit }) => {
  return (
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
  );
};

CheckboxRow.defaultProps = {
  setUnit: () => {},
  unit: "imperial",
};

CheckboxRow.propTypes = {
  setUnit: PropTypes.func,
  unit: PropTypes.string,
};

const mapStateToProps = (state) => ({
  unit: state.weatherState.unit,
});

const mapDispatchToProps = (dispatch) => ({
  setUnit: (unit) => dispatch(setWeatherUnit(unit)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckboxRow);
