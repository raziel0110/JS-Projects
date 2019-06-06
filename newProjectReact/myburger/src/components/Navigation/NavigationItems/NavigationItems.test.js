import React from "react";

import NavigationItems from "./NavigationItems";
import NavigationItem from "./NavigationItem/NavigationItem";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("<NavigationItems />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NavigationItems />);
  });

  it("should render 2 <NavigationItems /> elements if not authenticated", () => {
    expect(wrapper.find(NavigationItem)).toHaveLength(2);
  });

  it("should render 3 <NavigationItems /> elements if authenticated", () => {
    wrapper.setProps({ isAuthendicated: true });
    expect(wrapper.find(NavigationItem)).toHaveLength(3);
  });

  it("contains logout link", () => {
    wrapper.setProps({ isAuthendicated: true });
    expect(
      wrapper.contains(<NavigationItem link="/logout">Logout</NavigationItem>)
    ).toEqual(true);
  });

  it("contains Authenticate link", () => {
    wrapper.setProps({ isAuthendicated: false });
    expect(
      wrapper.contains(
        <NavigationItem link="/auth">Authenticate</NavigationItem>
      )
    ).toEqual(true);
  });
});
