import React from "react";
import ReactDOM from "react-dom";
import { ConnectedRouter } from "connected-react-router";

import "./index.css";

import { Provider } from "react-redux";

import initStore, { history } from "./store";

import App from "./App";
const store = initStore();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
