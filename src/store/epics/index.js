import { combineEpics } from "redux-observable";

import links from "./links";

export const rootEpic = combineEpics(...links);
