import React from 'react'
import { useRef,useState,useEffect } from 'react'

const Timer = () => {

  const [count,setCount] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCount(prevCount => prevCount + 1)
    },1000);

    return () => {
      clearInterval(intervalRef.current);
    }
  }, [count]);

  return (
    <div>
      <h1>Timer: {count} seconds</h1>
      <button onClick={() => clearInterval(intervalRef.current)}>Stop Timer</button>
      <p>----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p> 
    </div>
  )
}

export default Timer