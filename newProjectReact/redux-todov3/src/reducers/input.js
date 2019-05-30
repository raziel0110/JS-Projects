const initialState = { inputTextValue: "" };

const inputReducer = (state = initialState, action) => {
  if (action.type === "INPUT_CHANGE") {
    return Object.assign({}, state, {
      inputTextValue: action.text
    });
  } else {
    return { inputTextValue: "" };
  }
};

export default inputReducer;
