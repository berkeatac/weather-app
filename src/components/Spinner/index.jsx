import React from "react";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";

const Spinner = () => {
  return (
    <Grid container align="center">
      <Grid item xs={12} align="center">
        <CircularProgress />
      </Grid>
    </Grid>
  );
};

export default Spinner;
