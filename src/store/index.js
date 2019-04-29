import { createBrowserHistory } from "history";
import { applyMiddleware, createStore, compose } from "redux";
import { routerMiddleware } from "connected-react-router";
import { createEpicMiddleware } from "redux-observable";

import { createRootReducer } from "./reducers";
import { rootEpic } from "./epics";

export const history = createBrowserHistory();

const devToolsEnhancer =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const epicMiddleware = createEpicMiddleware();

const middlwaresEnhancer = applyMiddleware(
  routerMiddleware(history),
  epicMiddleware
);

const enhancer = compose(
  middlwaresEnhancer,
  devToolsEnhancer
);

export default function initStore() {
  const store = createStore(createRootReducer(history), enhancer);
  epicMiddleware.run(rootEpic);

  return store;
}
