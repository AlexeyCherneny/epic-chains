import friendsActins from "../actions/friends";

const initialState = {
  phone: {
    phone: "",

    isLoading: false,
    isLoaded: false,
    error: false
  }
};

export default function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case friendsActins.fetchFriendsStart: {
      return {
        ...state,

        phone: {
          isLoading: false,
          error: true
        }
      };
    }
    case friendsActins.fetchFriendsSuccess: {
      const { phone } = payload;
      return {
        ...state,

        phone: {
          phone,
          isLoading: false
        }
      };
    }
    case friendsActins.fetchFriendsFailure: {
      return {
        ...state,

        phone: {
          isLoading: false,
          error: true
        }
      };
    }

    default:
      return state;
  }
}
