const initialState = { userInput: "" };

const inputReducer = (state = initialState, action) => {
  if (action.type === "INPUT_FOLDER") {
    return Object.assign({}, state, {
      userInput: action.text
    });
  } else {
    return { userInput: "" };
  }
};

export default inputReducer;
