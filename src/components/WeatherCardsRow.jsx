import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import WeatherCard from "./WeatherCard";

const WeatherCardRow = ({ data, leftIndex, unit }) => {
  const theme = useTheme();
  const xsMatch = useMediaQuery(theme.breakpoints.up("xs"));
  const smMatch = useMediaQuery(theme.breakpoints.up("sm"));
  const mdMatch = useMediaQuery(theme.breakpoints.up("md"));

  const cardsAmount = () => {
    if (mdMatch) return 3;
    if (smMatch) return 2;
    if (xsMatch) return 1;
    return 1;
  };

  return (
    <>
      {Object.entries(data)
        .slice(leftIndex, leftIndex + cardsAmount())
        .map(([key, value]) => (
          <Grid item xs={12} sm={6} md={4} key={key}>
            <WeatherCard
              date={key}
              temps={value}
              unit={unit === "celcius" ? "C" : "F"}
            />
          </Grid>
        ))}
    </>
  );
};

WeatherCardRow.defaultProps = {
  data: {},
  leftIndex: 0,
  unit: "F",
};

WeatherCardRow.propTypes = {
  data: PropTypes.objectOf(PropTypes.objectOf(PropTypes.number)),
  leftIndex: PropTypes.number,
  unit: PropTypes.string,
};

const mapStateToProps = (state) => ({
  data: state.data,
  leftIndex: state.leftIndex,
  unit: state.unit,
});

const mapDispatchToProps = () => ({
  // SET SELECTED CARD COMES HERE
  setSelectedCard: () => {},
  // setUnit: (unit) => dispatch(setWeatherUnit(unit)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WeatherCardRow);
