import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/map";
import "rxjs/add/observable/of";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/takeUntil";
import { ajax } from "rxjs/observable/dom/ajax";

import { step } from "../actions";

const url = "http://localhost:8124/step";

export const fetchStep1 = action$ =>
  action$
    .ofType(step)
    .switchMap(() => ajax.getJSON(`${url}1`))
    .map(() => null);
