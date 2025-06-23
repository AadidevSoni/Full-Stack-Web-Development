import { useState } from "react";

const Counter = () => {

  const [count,setCount] = useState(0);

  const increment = () => setCount(count+1);
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Click</button>
      <p>----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p> 
    </div>
  )
}

export default Counter