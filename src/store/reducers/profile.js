import profileActins from "../actions/profile";

const initialState = {
  phone: {
    phone: "",

    isLoading: false,
    isLoaded: false,
    error: false
  },
  cards: {
    cards: "",

    isLoading: false,
    isLoaded: false,
    error: false
  }
};

export default function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case profileActins.fetchPhoneStart: {
      return {
        ...state,

        phone: {
          isLoading: false,
          error: true
        }
      };
    }
    case profileActins.fetchPhoneSuccess: {
      const { phone } = payload;
      return {
        ...state,

        phone: {
          phone,
          isLoading: false
        }
      };
    }
    case profileActins.fetchPhoneFailure: {
      return {
        ...state,

        phone: {
          isLoading: false,
          error: true
        }
      };
    }

    case profileActins.fetchCardsStart: {
      return {
        ...state,

        cards: {
          cards: "",
          isLoading: true
        }
      };
    }
    case profileActins.fetchCardsSuccess: {
      const { cards } = payload;

      const cardsList = Array.isArray(cards) ? cards : [];
      return {
        ...state,

        cards: {
          cards: cardsList,
          isLoading: false
        }
      };
    }
    case profileActins.fetchCardsFailure: {
      return {
        ...state,

        cards: {
          isLoading: false,
          error: true
        }
      };
    }
    default:
      return state;
  }
}
