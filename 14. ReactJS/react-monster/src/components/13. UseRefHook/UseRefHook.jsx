// way to access and interact with DOM element or to render without re render
import { useRef } from "react";
import React from 'react'

const UseRefHook = () => {

  const inputElement = useRef(null);
  console.log(inputElement);

  const focusInput = () => {
    inputElement.current.focus();
    inputElement.current.value = "Aadi Web Dev"
  }

  //useRef is pointing to the input

  return (
    <div>
      <h1>useRef()</h1>
      <input type="text" ref={inputElement} />
      <button onClick={() => focusInput()}>Focus & Write Aadi</button>
      <p>----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p> 
    </div>
  )
}

export default UseRefHook