const FETCH_FRIENDS_START = "FETCH_FRIENDS_START";
const FETCH_FRIENDS_SUCCESS = "FETCH_FRIENDS_SUCCESS";
const FETCH_FRIENDS_FAILURE = "FETCH_FRIENDS_FAILURE";

export const fetchFriendsStart = () => ({
  type: FETCH_FRIENDS_START
});

export const fetchFriendsSuccess = () => ({
  type: FETCH_FRIENDS_SUCCESS
});

export const fetchFriendsFailure = () => ({
  type: FETCH_FRIENDS_FAILURE
});
