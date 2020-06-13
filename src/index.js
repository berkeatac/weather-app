import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./store";
import App from "./App";

const title = "Weather App";

ReactDOM.render(
  <Provider store={store}>
    <App title={title} />
  </Provider>,
  document.getElementById("app")
);

module.hot.accept();
