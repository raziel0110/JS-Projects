import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";
import { wrap } from "module";

Enzyme.configure({ adapter: new Adapter() });

/**
 * Factory function to create a ShallowWrapper for the App component
 * @function setup
 * @param {object} props -Component props specific to this setup
 * @param {Object} state - initial state for setup
 * @return {ShallowWrapper}
 */

const setup = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props} />);
  if (state) {
    wrapper.setState(state);
  }

  return wrapper;
};
/**
 * Return shallowWrapper contains node with a given value
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within
 * @param {string} val - value of data-test attribute for search
 * return {ShallowWrapper}
 */
const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

test("render without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});

test("reders increment button", () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, "increment-button");
  expect(button.length).toBe(1);
});

test("render decrement button", () => {
  const wrapper = setup();
  const decrement = findByTestAttr(wrapper, "decrement-button");
  expect(decrement.length).toBe(1);
});
test("render counter display", () => {
  const wrapper = setup();
  const display = findByTestAttr(wrapper, "counter-display");
  expect(display.length).toBe(1);
});

test("counter start at 0", () => {
  const wrapper = setup();
  const initState = wrapper.state("counter");
  expect(initState).toBe(0);
});

test("error state is false", () => {
  const wrapper = setup();
  const initialState = wrapper.state("error");
  expect(initialState).toBe(false);
});

test("clicking button increment counter display", () => {
  const counter = 7;
  const wrapper = setup(null, { counter });

  //find button and click
  const button = findByTestAttr(wrapper, "increment-button");
  button.simulate("click");
  wrapper.update();

  //find display and test value
  const display = findByTestAttr(wrapper, "counter-display");
  expect(display.text()).toContain(counter + 1);
});

test("click decrement button counter display", () => {
  const counter = 5;
  const wrapper = setup(null, { counter });

  //find button
  const decrementButton = findByTestAttr(wrapper, "decrement-button");
  decrementButton.simulate("click");
  wrapper.update();

  //find display and test value
  const display = findByTestAttr(wrapper, "counter-display");
  expect(display.text()).toContain(counter - 1);
});

test("counter should not be below zero", () => {
  const counter = 0;
  const wrapper = setup(null, { counter });

  const decrement = findByTestAttr(wrapper, "decrement-button");
  decrement.simulate("click");
  wrapper.update();

  const display = findByTestAttr(wrapper, "counter-display");
  expect(display.text()).toContain(0);
});

it("should show error paragraph", () => {
  const counter = 0;
  const error = false;
  const wrapper = setup(null, { counter, error });

  const decrement = findByTestAttr(wrapper, "decrement-button");
  decrement.simulate("click");
  wrapper.update();
  const paragraph = findByTestAttr(wrapper, "error");

  expect(paragraph.length).toBe(1);
});
