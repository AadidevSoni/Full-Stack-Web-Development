import React from 'react'
import { useReducer,useState } from 'react'
import { counterReducer, initialState } from './counterReducer'

const CounterHook = () => {

  const [state,dispatch] = useReducer(counterReducer,initialState);
  const [inputValue,setInputValue] = useState(0);

  const handleIncrement = () => {
    dispatch({type: "incrementByAmount",payload: +inputValue});
  }

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({type: "increment"})}>+</button>
      <button onClick={() => dispatch({type: "decrement"})}>-</button>
      <button onClick={() => dispatch({type: "reset"})}>Reset</button>

      <div>
        <input type="number" value = {inputValue} onChange={e => setInputValue(e.target.value)} />

        <button onClick={handleIncrement}>+</button>
        <button onClick={() => dispatch({type: "decrementByAmount", payload: +inputValue})}>-</button>
        <p>----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p> 
      </div>
    </div>
  )
}

export default CounterHook