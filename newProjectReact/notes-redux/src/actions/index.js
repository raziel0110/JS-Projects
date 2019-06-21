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

export const saveNote = () => {
  return {
    type: "SAVE_NOTE"
  };
};
