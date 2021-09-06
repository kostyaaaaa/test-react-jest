import React, { useState, useEffect } from "react";
import useLoggedState from "../../hooks/useLoggedState";

const FunctionalComponent = ({ changeList }) => {
  const [count, setCount] = useState(0);
  const [text, setText] = useLoggedState("");

  const handleButton = () => {
    setCount((count) => ++count);
  };

  const handleInput = (event) => {
    setText(event.target.value);
  };

  useEffect(() => {
    if (count % 2 === 1) {
      setText(count);
      changeList()
    }
  }, [count]); // eslint-disable-line

  return (
    <div id="functional-component">
      <button onClick={handleButton}>Click me</button>
      <input type="text" value={text} onChange={handleInput} />
      <div className="count">{count}</div>
    </div>
  );
};

export default FunctionalComponent;
