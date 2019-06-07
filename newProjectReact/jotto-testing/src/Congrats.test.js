import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { findByTestAttribute, checkProps } from "../test/testUtility";
import Congrats from "./Congrats";

Enzyme.configure({ adapter: new Adapter() });

const defaultProps = { success: false };

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Congrats {...setupProps} />);
};

test("renders without errror", () => {
  const wrapper = setup({ succes: false });
  const component = findByTestAttribute(wrapper, "component-congrats");
  expect(component.length).toBe(1);
});

test("reder no thex when success props is false", () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttribute(wrapper, "component-congrats");
  expect(component.text()).toBe("");
});

test("renders non-empty congrats message when success prop is true", () => {
  const wrapper = setup({ success: true });
  const message = findByTestAttribute(wrapper, "congrats-message");
  expect(message.text()).not.toBe(0);
});

test("does not throw warning with expected props", () => {
  const expectedProps = { success: false };
  checkProps(Congrats, expectedProps);
});
