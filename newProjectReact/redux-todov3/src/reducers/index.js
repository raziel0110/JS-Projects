import { combineReducers } from "redux";
const initialState = { inputTextValue: "", todos: [] };

const inputReducer = (state = initialState, action) => {
  console.log("reducer", state);
  if (action.type === "INPUT_CHANGE") {
    return Object.assign({}, state, { inputTextValue: action.text });
  } else if (action.type === "ADD_TODO") {
    return Object.assign({}, state, {
      todos: state.todos.concat(state.inputTextValue),
      inputTextValue: ""
    });
  }
  return state;
};

export default combineReducers({
  input: inputReducer
});
