import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { BurgerBuilder } from "./BurgerBuilder";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
configure({ adapter: new Adapter() });

describe("BurgerBuilder tester", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<BurgerBuilder onInitIngredients={() => {}} />);
  });

  it("should render <BuildControl /> when receveing ingredients", () => {
    wrapper.setProps({ ing: { salad: 0 } });
    expect(wrapper.find(BuildControls)).toHaveLength(1);
  });
});
