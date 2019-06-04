import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";

export const addIngrediend = name => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredientName: name
  };
};

export const removeIngrediend = name => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientName: name
  };
};

export const setIngredients = ingredients => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients: ingredients
  };
};

export const initIngredients = () => {
  return dispatch => {
    axios
      .get("https://react-my-burger0110.firebaseio.com/ingredients.json")
      .then(res => {
        dispatch(setIngredients(res.data));
      })
      .catch(err => {
        dispatch(fetchIngredientsFaild());
      });
  };
};

export const fetchIngredientsFaild = () => {
  return {
    type: actionTypes.FETCH_INGREDIENTS_FAIL
  };
};
