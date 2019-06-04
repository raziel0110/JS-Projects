import * as actionTypes from "./actionTypes";

export const store_result = result => {
  return function(dispatch, getState) {
    setTimeout(() => {
      //   const oldCounter = getState().ctr.counter;
      //   console.log(oldCounter);
      dispatch(saveResult(result));
    }, 2000);
  };
};
export const delete_result = id => {
  return {
    type: actionTypes.DELETE_RESULT,
    id: id
  };
};

export const saveResult = res => {
  return {
    type: actionTypes.STORE_RESULT,
    result: res
  };
};
