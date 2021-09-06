import Component from "./";
import { mount } from "enzyme";

let wrapper;

describe("ClassComponent", () => {
  beforeEach(() => {
    wrapper = mount(<Component></Component>);
  });
  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper).not.toBeNull();
  });
  it("should use componentDidMount", () => {
    expect(wrapper.state().text).toEqual("Hello");
  });
  it("should be counter 0 by default", () => {
    expect(wrapper.state().counter).toEqual(0);
  });
  it("should increase counter when click button", () => {
    wrapper.find("button").simulate("click");
    wrapper.find("button").simulate("click");
    expect(wrapper.state().counter).toEqual(2);
  });
});
