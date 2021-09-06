import Reducer, { initialState } from "./reducer";
import { FETCH_ERROR, FETCH_SUCCESS, FETCH_START } from "./actionTypes";

describe("Reducer", () => {
  it("should return initialState by default", () => {
    const reducerValue = Reducer(initialState, {});
    expect(reducerValue).toEqual(initialState);
  });
  it("should return data when action type success", () => {
    const mockData = ["4", { t: "1" }, 55, [], false];
    const reducerValue = Reducer(initialState, {
      type: FETCH_SUCCESS,
      payload: mockData,
    });
    expect(reducerValue.data).toEqual(mockData);
    expect(reducerValue.loading).toEqual(false);
    expect(reducerValue.error).toEqual(false);
  });
  it("should return error when action type error", () => {
    const mockError = "error";
    const reducerValue = Reducer(initialState, {
      type: FETCH_ERROR,
      payload: mockError,
    });
    expect(reducerValue.error).toEqual(mockError);
    expect(reducerValue.loading).toEqual(false);
  });
  it("should return error when action type start", () => {
    const reducerValue = Reducer(initialState, { type: FETCH_START });
    expect(reducerValue.loading).toEqual(true);
  });
});
