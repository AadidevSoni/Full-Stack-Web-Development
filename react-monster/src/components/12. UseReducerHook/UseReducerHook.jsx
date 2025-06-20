//Similar to useState but for complex state objects with multipel sub values
// const[state,dispatch] = useeducer(reducer,initialState)
import React from 'react'
import { useReducer } from "react";

const initialState = {count: 0};

const reducer = (state,action)  => {
  switch (action.type) {
    case 'increment':
      return {...state, count: state.count+1}
    
    case 'decrement':
      return {...state, count: state.count-1}

    case 'reset':
      return {...state, count: 0};
  
    default:
      return state;
  }
}

//dispatch actually lets you change the count as it calls any of the case as per the button is clicked

const UseReducerHook = () => {

  const [state,dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({type: "increment"})}>+</button>
      <button onClick={() => dispatch({type: "decrement"})}>-</button>
      <button onClick={() => dispatch({type: "reset"})}>Reset</button>
      <p>----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p> 
    </div>
  )
}

export default UseReducerHook