import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import WeatherCard from "./WeatherCard";
import { setWeatherCardsAmount } from "../actions/navigate";

const WeatherCardRow = ({
  data,
  leftIndex,
  unit,
  setCardsOnScreen,
  cardAmount,
}) => {
  const theme = useTheme();
  const xsMatch = useMediaQuery(theme.breakpoints.up("xs"));
  const smMatch = useMediaQuery(theme.breakpoints.up("sm"));
  const mdMatch = useMediaQuery(theme.breakpoints.up("md"));

  const cardsAmount = () => {
    if (mdMatch) setCardsOnScreen(3);
    else if (smMatch) setCardsOnScreen(2);
    else if (xsMatch) setCardsOnScreen(1);
  };

  useEffect(() => {
    cardsAmount();
  }, [xsMatch, smMatch, mdMatch]);

  return (
    <>
      {Object.entries(data)
        .slice(leftIndex, leftIndex + cardAmount)
        .map(([key, value]) => (
          <Grid item xs={12 / cardAmount} key={key}>
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
  setCardsOnScreen: () => {},
  cardAmount: 0,
};

WeatherCardRow.propTypes = {
  data: PropTypes.objectOf(PropTypes.objectOf(PropTypes.number)),
  leftIndex: PropTypes.number,
  unit: PropTypes.string,
  setCardsOnScreen: PropTypes.func,
  cardAmount: PropTypes.number,
};

const mapStateToProps = (state) => ({
  data: state.weatherState.data,
  leftIndex: state.navigationState.leftIndex,
  unit: state.weatherState.unit,
  cardAmount: state.navigationState.cardAmount,
});

const mapDispatchToProps = (dispatch) => ({
  // SET SELECTED CARD COMES HERE
  setSelectedCard: () => {},
  setCardsOnScreen: (amount) => dispatch(setWeatherCardsAmount(amount)),
  // setUnit: (unit) => dispatch(setWeatherUnit(unit)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WeatherCardRow);
