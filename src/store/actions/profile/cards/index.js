const FETCH_CARDS_START = "FETCH_CARDS_START";
const FETCH_CARDS_SUCCESS = "FETCH_CARDS_SUCCESS";
const FETCH_CARDS_FAILURE = "FETCH_CARDS_FAILURE";

export const fetchCardsStart = () => ({
  type: FETCH_CARDS_START
});
fetchCardsStart.toString = () => FETCH_CARDS_START;

export const fetchCardsSuccess = () => ({
  type: FETCH_CARDS_SUCCESS
});
fetchCardsSuccess.toString = () => FETCH_CARDS_SUCCESS;

export const fetchCardsFailure = () => ({
  type: FETCH_CARDS_FAILURE
});
fetchCardsFailure.toString = () => FETCH_CARDS_FAILURE;
