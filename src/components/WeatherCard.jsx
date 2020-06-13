import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 150,
  },
  pos: {
    marginBottom: 12,
  },
});

const WeatherCard = ({ date, temps, unit }) => {
  const classes = useStyles();

  const averageTemp = (temp) => {
    const values = Object.values(temp);
    return temp
      ? (
          values.reduce((prev, cur) => prev + cur, 0).toFixed(0) / values.length
        ).toFixed(1)
      : 0;
  };

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent align="center">
        <Typography variant="h5" component="h2">
          {date}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          _weather_condition_
        </Typography>
        <Typography variant="h6" component="p">
          {`${averageTemp(temps)} °${unit}`}
          <br />
        </Typography>
      </CardContent>
    </Card>
  );
};

WeatherCard.defaultProps = {
  date: "date",
  temps: {},
  unit: "F",
};

WeatherCard.propTypes = {
  date: PropTypes.string,
  temps: PropTypes.objectOf(PropTypes.number),
  unit: PropTypes.string,
};

export default WeatherCard;
