import { createStore } from "redux";

const initialState = {
  repos: [],
  inputText: ""
};

const reducer = (state = initialState, action) => {
  console.log("reducer", action);
  switch (action.type) {
    case "INPUT_CHANGE":
      return Object.assign({}, state, { inputText: action.text });
    default:
      return state;
  }
};

const store = createStore(reducer);
export default store;
