import { createStore } from "redux";

const initalState = { count: 0 };

const reducer = (state = initalState, action) => {
  console.log("reducer running", action);

  switch (action.type) {
    case "INCREMENT":
      return Object.assign({}, state, { count: state.count + 1 });
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
