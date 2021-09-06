import { useState } from "react";

const useLoggedState = (defaultState) => {
  const [state, setState] = useState(defaultState);

  const changeState = (value) => {
    console.log(`new value: ${value}`);
    setState(value);
  };
  return [state, changeState];
};

export default useLoggedState;
