import {
  GO_NEXT_PAGE,
  GO_PREVIOUS_PAGE,
  SET_WEATHER_CARD_AMOUNT,
} from "../constants/actionTypes";

const goNextPage = () => ({
  type: GO_NEXT_PAGE,
});

const goPreviousPage = () => ({
  type: GO_PREVIOUS_PAGE,
});

const setWeatherCardsAmount = (amount) => ({
  type: SET_WEATHER_CARD_AMOUNT,
  amount,
});

export { goNextPage, goPreviousPage, setWeatherCardsAmount };
