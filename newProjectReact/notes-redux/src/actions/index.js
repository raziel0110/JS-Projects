export const changeInputHandler = e => {
  return {
    type: "INPUT_FOLDER",
    text: e.targe.value.toUpperCase()
  };
};

export const textareaChangeHandler = e => {
  return {
    type: "INPUT_NOTE",
    text: e.target.value
  };
};

export const titleHandler = e => {
  return {
    type: "INPUT_TITLE",
    text: e.target.value
  };
};

export const saveNote = (note, title) => {
  return {
    type: "SAVE_NOTE",
    note: note,
    title: title
  };
};

export const addFolder = () => {
  return {
    type: "ADD_FOLDER"
  };
};
