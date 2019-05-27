export const inputText = e => {
  return {
    type: "INPUT_CHANGE",
    text: e.target.value
  };
};

export const onSubmit = e => {
  e.preventDefault();
  return {
    type: "ADD_TODO"
  };
};
