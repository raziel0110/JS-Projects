export const inputText = e => {
  return {
    type: "INPUT_CHANGE",
    text: e.target.value,
    id: new Date()
  };
};

export const onSubmit = (e, input) => {
  e.preventDefault();
  return {
    type: "ADD_TODO",
    inputTextValue: input
  };
};

export const deleteItem = id => {
  return {
    type: "DELETE_TODO",
    id: id
  };
};

export const updateButton = id => {
  return {
    type: "UPDATE_BUTTON",
    id: id
  };
};

export const updateItem = (e, id) => {
  return {
    type: "UPDATE_TODO",
    id: id
  };
};
