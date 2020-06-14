/* eslint-disable react/jsx-wrap-multilines */
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import { setWeatherUnit } from "../../actions/weather";
import { IMPERIAL, METRIC } from "../../constants";

const CheckboxRow = ({ unit, setUnit }) => {
  return (
    <Grid container item xs={12}>
      <Grid item xs={6} align="center">
        <FormControlLabel
          control={
            <Checkbox
              name={METRIC}
              checked={unit === METRIC}
              onClick={() => setUnit(METRIC)}
            />
          }
          label="Celcius"
        />
      </Grid>
      <Grid item xs={6} align="center">
        <FormControlLabel
          control={
            <Checkbox
              name={IMPERIAL}
              checked={unit === IMPERIAL}
              onClick={() => setUnit(IMPERIAL)}
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
  unit: IMPERIAL,
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
