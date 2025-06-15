import React from 'react'
import { useState , useEffect } from "react";

const DataFetching = () => {

  const [data,setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos")
      const data = await response.json();
      if(data && data.length) setData(data);
    }

    getData();
  },[]) //Empty dependency array means it only runs once


  return (
    <div> 
      <ul>
        {data.map(todo => (
          <li key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>
      <p>----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p> 
    </div>
  )
}

export default DataFetching