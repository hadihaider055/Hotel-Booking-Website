import { SET_USER } from "../Action";

const initialState = {
  user: [],
};

export const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER: {
      return {
        user: [...state.user, action.payload],
      };
    }
    default: {
      return state;
    }
  }
};
