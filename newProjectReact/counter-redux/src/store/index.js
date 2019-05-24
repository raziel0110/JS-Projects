import { createStore } from "redux";

const initialState = { inputSearchText: "", todos: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      return Object.assign({}, state, { inputSearchText: action.text });
    case "ADD_TODO":
      return Object.assign({}, state, {
        todos: state.todos.concat(state.inputSearchText),
        inputSearchText: ""
      });
    case "DELETE_TODO":
      const todo_copy = state.todos.slice();
      todo_copy.splice(action.index, 1);
      return Object.assign({}, state, { todos: todo_copy });
    case "UPDATE_TODO":
      const value = state.todos[action.index];
      const newValue = prompt("Are u sure to update?", value);
      const todos_copy = state.todos.slice();
      todos_copy[action.index] = newValue;
      return Object.assign({}, state, { todos: todos_copy });
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
