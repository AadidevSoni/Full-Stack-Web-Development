import React from 'react'
import "./style.css";
import { useState } from 'react';

function generateId() {
  return Math.floor(Math.random() * 10);
}

const ToDo = () => {

  const [todos,setToDos] = useState([]);
  const [input,setInput] = useState("");

  const handleSubmit = () => {
    if (input.trim()) {
      setToDos((prevTodos) => [
        ...prevTodos,
        {
          text: input.trim(),
          id: generateId(),
        }
      ]);
      setInput("");
    }
  };

  const clearToDo = () => {
    setToDos([]);
  }

  const removeTodo = (id) =>{
    setToDos((todos) => todos.filter((t) => t.id !== id));
  }

  return (
    <div className='container'>
      <input type="text" placeholder='New Todo' value={input} onChange={e => setInput(e.target.value)}/>
      <button onClick={handleSubmit}>Submit</button>

      <h2 style={{marginTop: "20px"}}>To Do List</h2>

      <ul className="todos-list">
        {todos.map(({ text, id }) => (
          <li key={id} className="todo">
            <span style={{color: "black"}}>{text}</span>
            <button className="close" onClick={() => removeTodo(id)}>
              X
            </button>
          </li>
        ))}
      </ul>
      <button  style={{marginTop: "100px"}} onClick={clearToDo}>Clear</button>
    </div>
  )
}

export default ToDo