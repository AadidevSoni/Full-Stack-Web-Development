import { useState , useEffect } from "react";
import React from 'react'

const CounterEffect = () => {

  const [value,setValue] = useState(0);

  useEffect(() => {
    document.title = "Increment " + value;
  },[value]);

  return (
    <div>
      <h3>Counter: {value}</h3>
      <button onClick={() => setValue(value+1)}>Click Me</button>
      <p>----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p> 
    </div>
  )
}

export default CounterEffect