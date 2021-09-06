import React, { useEffect, useState } from 'react';
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const handleButton = () => {
    setCounter((counter) => ++counter)
  };
  
  const handleButton2 = () => {
    setCounter2((counter2) => ++counter2)
  };

  useEffect(() => {
    console.log('na chile na rasslabone')
  }, [counter])

  return (
    <div>
      {counter}
      {counter2}
      <button onClick={handleButton}>click me</button>
      <button onClick={handleButton2}>click me</button>
    </div>
  );
}

export default App;
