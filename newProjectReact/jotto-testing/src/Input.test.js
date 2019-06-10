import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import { findByTestAttribute, storeFactory } from "../test/testUtility";
import Input from "./Input";

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />)
    .dive()
    .dive();
  return wrapper;
};
describe("render", () => {
  describe("word has not been guessed", () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: false };
      wrapper = setup(initialState);
    });
    it("render component without error", () => {
      const component = findByTestAttribute(wrapper, "component-input");
      expect(component.length).toBe(1);
    });
    it("render the input box", () => {
      const component = findByTestAttribute(wrapper, "input-box");
      expect(component.length).toBe(1);
    });
    it("renders the submit button", () => {
      const component = findByTestAttribute(wrapper, "submit");
      expect(component.length).toBe(1);
    });
  });

  describe("word has been guessed", () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: true };
      wrapper = setup(initialState);
    });
    it("render component without error", () => {
      const component = findByTestAttribute(wrapper, "component-input");
      expect(component.length).toBe(1);
    });
    it("does not render the input box", () => {
      const component = findByTestAttribute(wrapper, "input-box");
      expect(component.length).toBe(0);
    });
    it("does not render the submit button", () => {
      const component = findByTestAttribute(wrapper, "submit");
      expect(component.length).toBe(0);
    });
  });
});

describe("updating the state", () => {});
