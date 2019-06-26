const initialState = {
  noteText: "",
  noteTitle: "",
  noteId: 0,
  date: new Date().toLocaleString(),
  isSelect: false
};

const noteReducer = (state = initialState, action) => {
  if (action.type === "INPUT_NOTE") {
    return Object.assign({}, state, {
      noteText: action.text
    });
  } else if (action.type === "INPUT_TITLE") {
    return Object.assign({}, state, {
      noteTitle: action.text
    });
  } else {
    return state;
  }
};

export default noteReducer;
