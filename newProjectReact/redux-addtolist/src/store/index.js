import { createStore } from "redux";
import constants from "./constants";

const initialState = { inputText: "", items: [] };

const reducer = (state = initialState, action) => {
  console.log("reducer", state);
  switch (action.type) {
    case constants.INPUT_CHANGE:
      return Object.assign({}, state, {
        inputText: action.text
      });
    case constants.ADD_ITEM:
      return Object.assign({}, state, {
        items: state.items.concat(state.inputText),
        inputText: ""
      });

    case constants.DELETE_ITEM:
      const copy = state.items.slice();
      copy.splice(action.index, 1);
      return Object.assign({}, state, { items: copy });
    default:
      return state;
  }
};

const store = createStore(reducer);
export default store;
