import checkPropTypes from "check-prop-types";
import { createStore } from "redux";

import { rootReducer } from "../src/reducers";
export const storeFactory = initialState => {
  return createStore(rootReducer, initialState);
};

/**
 * Return node(s) with a given data-test attribute
 * @param {ShallowWrapper} wrapper -Enzyme shallow wrapper
 * @param {string} val - Value of data-test attribute for search
 * @returns {ShallowWrapper}
 */

export const findByTestAttribute = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

export const checkProps = (component, conformingProps) => {
  const propsError = checkPropTypes(
    component.propTypes,
    conformingProps,
    "prop",
    component.name
  );

  expect(propsError).toBeUndefined();
};
