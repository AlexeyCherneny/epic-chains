const FETCH_PHONE_START = "FETCH_PHONE_START";
const FETCH_PHONE_SUCCESS = "FETCH_PHONE_SUCCESS";
const FETCH_PHONE_FAILURE = "FETCH_PHONE_FAILURE";

export const fetchPhoneStart = () => ({
  type: FETCH_PHONE_START
});

export const fetchPhoneSuccess = () => ({
  type: FETCH_PHONE_SUCCESS
});

export const fetchPhoneFailure = () => ({
  type: FETCH_PHONE_FAILURE
});
