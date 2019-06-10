import { actionTypes } from "../actions";

const initialState = { success: false };

const success = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CORRECT_GUESS:
      return { ...state, success: true };
    default:
      return state;
  }
};

export default success;
