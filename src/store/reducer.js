import { FETCH_ERROR, FETCH_SUCCESS, FETCH_START } from "./actionTypes";

export const initialState = {
  data: [],
  loading: false,
  error: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_SUCCESS: {
      return { data: payload, loading: false, error: false };
    }
    case FETCH_START: {
      return { loading: true };
    }
    case FETCH_ERROR: {
      return { error: payload, loading: false };
    }
    default:
      return state;
  }
};

export default reducer;
