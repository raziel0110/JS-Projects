const initialState = { todos: [] };
let id = 0;

const listReducer = (state = initialState, action) => {
  if (action.type === "ADD_TODO") {
    // return Object.assign({}, state, {
    //   todos: state.todos.concat(state.inputTextValue),
    //   inputTextValue: ""
    // });
    return {
      ...state,
      todos: state.todos.concat({
        id: id++,
        text: action.inputTextValue,
        isSelected: false
      })
    };
  } else if (action.type === "DELETE_TODO") {
    return Object.assign({}, state, {
      todos: state.todos.filter(todo => todo.id !== action.id)
    });
  } else if (action.type === "UPDATE_BUTTON") {
    const obj = Object.assign({}, state, {
      todos: state.todos.find(todo => todo.id === action.id)
    });
    obj.todos.isSelected = true;
    return { ...state, obj };
  } else if (action.type === "UPDATE_TODO") {
    const newElement = Object.assign({}, state, {
      todos: state.todos.find(todo => todo.id === action.id)
    });
  }

  return state;
};

export default listReducer;
