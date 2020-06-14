/* eslint-disable react/jsx-wrap-multilines */
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Alert from "@material-ui/lab/Alert";
import AlertTitle from "@material-ui/lab/AlertTitle";

const ErrorDisplay = ({ error }) => {
  return (
    <Grid container justify="center" style={{ marginTop: 30 }}>
      <Grid item xs={8}>
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          {error}
        </Alert>
      </Grid>
    </Grid>
  );
};

ErrorDisplay.defaultProps = {
  error: "",
};

ErrorDisplay.propTypes = {
  error: PropTypes.string,
};

const mapStateToProps = (state) => ({
  error: state.weatherState.error,
});

export default connect(mapStateToProps, null)(ErrorDisplay);
