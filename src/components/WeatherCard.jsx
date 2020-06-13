import React from "react";
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

const WeatherCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent align="center">
        <Typography variant="h5" component="h2">
          _date_
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          _weather_condition_
        </Typography>
        <Typography variant="body2" component="p">
          20 C - 12 C
          <br />
        </Typography>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
