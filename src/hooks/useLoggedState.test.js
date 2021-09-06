import useLoggedState from "./useLoggedState";
import { mount } from "enzyme";
import { act } from "react-dom/test-utils";

const defaultStateValue = 0;
const originalConsoleLog = console.log;

describe("useLoggedState", () => {
  // mock console log
  const messagesArray = [];
  const mockedLog = (message) => messagesArray.push(message);
  beforeEach(() => {
    console.log = mockedLog;
  });

  afterEach(() => {
    console.log = originalConsoleLog;
  });

  // mock hook
  let loggedState;
  const renderHook = (hook) => {
    const TestComponent = () => {
      loggedState = hook(defaultStateValue);
      return null;
    };
    mount(<TestComponent />);
  };
  renderHook(useLoggedState);

  // test hook functionality
  it("should work as useState hook", () => {
    expect(loggedState[0]).toEqual(defaultStateValue);
    act(() => {
      loggedState[1](10);
    });
    expect(loggedState[0]).toEqual(10);
  });
  it("should console log new value", () => {
    expect(messagesArray).toEqual(["new value: 10"]);
  });
});
