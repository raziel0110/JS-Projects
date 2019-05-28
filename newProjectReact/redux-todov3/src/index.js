import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import inputReducer from "./reducers/input";
import listReducer from "./reducers/todo";

const rootReducer = combineReducers({
  inputTextValue: inputReducer,
  todos: listReducer
});

ReactDOM.render(
  <Provider store={createStore(rootReducer)}>
    <App />
  </Provider>,
  document.getElementById("root")
);
