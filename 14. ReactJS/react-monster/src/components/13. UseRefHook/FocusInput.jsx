import { useRef } from "react";
import React from 'react'

const FocusInput = () => {

  const inputElement = useRef(null);

  const focusInput = () => {
    inputElement.current.focus();
    inputElement.current.value = "Hello";
  }

  return (
    <div>
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus</button>
      <p>----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p> 
    </div>
  )
}

export default FocusInput