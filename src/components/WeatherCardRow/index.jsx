import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import CardActionArea from "@material-ui/core/CardActionArea";

import WeatherCard from "../WeatherCard";
import { setSelectedCard } from "../../actions/weather";
import { setWeatherCardsAmount } from "../../actions/navigate";
import { METRIC } from "../../constants";

const WeatherCardRow = ({
  data,
  leftIndex,
  unit,
  setCardsOnScreen,
  cardAmount,
  setChartDay,
  selectedCard,
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
            <CardActionArea onClick={() => setChartDay(key)}>
              <WeatherCard
                date={key}
                temps={value}
                unit={unit === METRIC ? "C" : "F"}
                selected={selectedCard === key}
              />
            </CardActionArea>
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
  setChartDay: () => {},
  selectedCard: "",
};

WeatherCardRow.propTypes = {
  data: PropTypes.objectOf(PropTypes.object),
  leftIndex: PropTypes.number,
  unit: PropTypes.string,
  setCardsOnScreen: PropTypes.func,
  cardAmount: PropTypes.number,
  setChartDay: PropTypes.func,
  selectedCard: PropTypes.string,
};

const mapStateToProps = (state) => ({
  data: state.weatherState.data[state.weatherState.unit],
  leftIndex: state.navigationState.leftIndex,
  unit: state.weatherState.unit,
  cardAmount: state.navigationState.cardAmount,
  selectedCard: state.weatherState.selectedCard,
});

const mapDispatchToProps = (dispatch) => ({
  // SET SELECTED CARD COMES HERE
  setChartDay: (day) => dispatch(setSelectedCard(day)),
  setCardsOnScreen: (amount) => dispatch(setWeatherCardsAmount(amount)),
  // setUnit: (unit) => dispatch(setWeatherUnit(unit)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WeatherCardRow);
