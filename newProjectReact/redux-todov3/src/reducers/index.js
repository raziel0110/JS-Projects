// import { combineReducers } from "redux";
// const initialState = { inputTextValue: "", todos: [] };
// let id = 0;

// const inputReducer = (state = initialState, action) => {
//   console.log("reducer", state);
//   if (action.type === "INPUT_CHANGE") {
//     return Object.assign({}, state, {
//       inputTextValue: action.text
//     });
//   } else if (action.type === "ADD_TODO") {
//     // return Object.assign({}, state, {
//     //   todos: state.todos.concat(state.inputTextValue),
//     //   inputTextValue: ""
//     // });
//     return {
//       ...state,
//       todos: state.todos.concat({
//         id: id++,
//         text: state.inputTextValue,
//         isSelected: false
//       }),
//       inputTextValue: ""
//     };
//   } else if (action.type === "DELETE_TODO") {
//     return Object.assign({}, state, {
//       todos: state.todos.filter(todo => todo.id !== action.id)
//     });
//   }
//   return state;
// };

// export default combineReducers({
//   input: inputReducer
// });
