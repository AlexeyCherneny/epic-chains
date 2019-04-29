import { mergeMap } from "rxjs/operators";
import { from, never } from "rxjs";

import actions from "../../../actions/profile";
import cardsReq from "./request";
import cardsHandler from "./handler";

import { get } from "../../../../utils";
import { apiCall } from "../utils";

export const fetchCards = (action$, store) => {
  let isRequestLoading = false;

  return action$
    .ofType(
      actions.fetchCardsStart,
      actions.fetchCardsSuccess,
      actions.fetchCardsFailure
    )
    .pipe(
      mergeMap(action => {
        if (
          (action.type === actions.fetchCardsSuccess.toString() ||
            action.type === actions.fetchCardsFailure.toString()) &&
          !isRequestLoading
        ) {
          return [];
        }

        const storeBlock = get(store, "value.profile.cards");
        if (storeBlock) {
          const { isLoading, isLoaded } = storeBlock;

          if (isLoaded) {
            return never();
          }

          if (isLoading) {
            isRequestLoading = true;
            return never();
          }

          return from(apiCall(cardsReq(), cardsHandler)).pipe(
            mergeMap(cards => {
              return [actions.fetchCardsSuccess({ cards })];
            })
          );
        }
      })
    );
};

export default [fetchCards];
