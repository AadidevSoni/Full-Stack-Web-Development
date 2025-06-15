import React from 'react'
import { useState } from "react";

const ToDoList = () => {

  const [toDo,setToDo] = useState([]);
  const [inputValue,setInputValue] = useState("");
  const [inputs,setInputs] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if(inputValue.trim()) {
      setToDo([...toDo,inputValue]);
      setInputValue("");
    }
  }

  const handleChange = e => {
    setInputValue(e.target.value);
  }

  const clearToDo = () => {
    setToDo([]);
  }

  const removeItem = e => {
    e.preventDefault();
    if(inputs.trim()) {
      setToDo(toDo.filter(item => item !== inputs));
      setInputs("");
    }
  }

   const handleChanges = e => {
    setInputs(e.target.value);
  }

  return (
    <div>
      <h1>TO DO</h1>

      <div style = {{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <div>
          {
            toDo.map(listItem => (
              <ul key = {Math.random()}>
                <li>{listItem}</li>
              </ul>
            ))
          }
        </div>
        <div  style = {{display:"flex",flexDirection:"column"}}>
          <div>
            <form onSubmit={handleSubmit} >
              <input type="text" value = {inputValue} onChange = {handleChange} placeholder='To Do' />
              <button type = "submit">Add To Do</button>
            </form>
          </div>
        </div>

        <div  style = {{display:"flex"}}>
          <div>
            <form onSubmit={removeItem}>
              <input type="text" value = {inputs} onChange = {handleChanges} placeholder='To Do TO REMOVE' />
              <button type = "submit">REMOVE</button>
            </form>
          </div>
          <div>
            <button onClick={clearToDo}>Clear</button>
          </div>
        </div>
      </div>

      <p>----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p> 
    </div>  
  )
}
export default ToDoList;