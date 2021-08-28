import { SIGN_UP, LOG_IN, SIGN_OUT } from "../Action";

const initialState = {
  user: [],
};

export const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP: {
      return {
        user: [...state.user, action.payload],
      };
    }
    case LOG_IN: {
      return {
        user: [...state.user, action.payload],
      };
    }
    case SIGN_OUT: {
      return {
        user: [],
      };
    }
    default: {
      return state;
    }
  }
};
