import Component from "./App";
import { shallow } from "enzyme";

let wrapper;

describe("App", () => {
  beforeEach(() => {
    wrapper = shallow(<Component></Component>);
  });
  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper).not.toBeNull();
  });
});
