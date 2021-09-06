import Component from "./";
import { mount } from "enzyme";

let wrapper;

describe("FunctionalComponent", () => {
  beforeEach(() => {
    wrapper = mount(<Component></Component>);
  });
  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper).not.toBeNull();
  });
  it("should render 0 count by default", () => {
    expect(wrapper.find(".count").text()).toEqual("0");
  });
  it("should increase count when button click", () => {
    wrapper.find("button").simulate("click");
    expect(wrapper.find(".count").text()).toEqual("1");
  });
  it("should update input value when button clicked twice", () => {
    wrapper.find("button").simulate("click");
    wrapper.find("button").simulate("click");
    wrapper.find("button").simulate("click");
    expect(wrapper.find("input").get(0).props.value).toEqual(3);
    expect(wrapper.find("input").instance().value).toEqual("3");
  });
  it("should update text when type in input", () => {
    wrapper.find("input").simulate("change", { target: { value: "123" } });
    expect(wrapper.find("input").get(0).props.value).toEqual("123");
  });
});
