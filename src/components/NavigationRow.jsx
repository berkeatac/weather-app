import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Grid from "@material-ui/core/Grid";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import IconButton from "@material-ui/core/IconButton";

import { goNextPage, goPreviousPage } from "../actions/navigate";

const NavigationRow = ({
  leftIndex,
  nextPage,
  previousPage,
  cardAmount,
  data,
}) => {
  const totalCards = Object.keys(data).length;

  return (
    <Grid container item xs={12} justify="space-between" alignItems="center">
      <IconButton
        onClick={() => previousPage()}
        style={{ visibility: `${leftIndex ? "visible" : "hidden"}` }}
      >
        <NavigateBeforeIcon style={{ fontSize: 40 }} />
      </IconButton>

      <IconButton
        onClick={() => nextPage()}
        style={{
          visibility: `${
            leftIndex + cardAmount < totalCards ? "visible" : "hidden"
          }`,
        }}
      >
        <NavigateNextIcon style={{ fontSize: 40 }} />
      </IconButton>
    </Grid>
  );
};

NavigationRow.defaultProps = {
  leftIndex: 0,
  nextPage: () => {},
  previousPage: () => {},
  cardAmount: 0,
  data: {},
};

NavigationRow.propTypes = {
  leftIndex: PropTypes.number,
  nextPage: PropTypes.func,
  previousPage: PropTypes.func,
  cardAmount: PropTypes.number,
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

const mapStateToProps = (state) => ({
  leftIndex: state.navigationState.leftIndex,
  cardAmount: state.navigationState.cardAmount,
  data: state.weatherState.data[state.weatherState.unit],
});

const mapDispatchToProps = (dispatch) => ({
  nextPage: () => dispatch(goNextPage()),
  previousPage: () => dispatch(goPreviousPage()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavigationRow);
