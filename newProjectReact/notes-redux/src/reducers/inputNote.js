const initialState = {
  noteText: "",
  noteTitle: "",
  noteId: 0,
  date: "",
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
  } else if (action.type === "SAVE_NOTE") {
    return {
      ...state,
      noteId: state.noteId + 1,
      date: new Date().toLocaleString()
    };
  } else {
    return state;
  }
};

export default noteReducer;
