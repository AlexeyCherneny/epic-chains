import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import profile from "./profile";
import friends from "./friends";

export const createRootReducer = history =>
  combineReducers({
    profile,
    friends,
    router: connectRouter(history)
  });
