import * as actionTypes from "./actionTypes";

export const increment = () => {
  return {
    type: actionTypes.INCREMENT
  };
};

export const decrement = () => {
  return {
    type: actionTypes.DECREMENT
  };
};

export const add = val => {
  return {
    type: actionTypes.ADD,
    val: val
  };
};
export const substract = val => {
  return {
    type: actionTypes.SUBTRACT,
    val: val
  };
};
