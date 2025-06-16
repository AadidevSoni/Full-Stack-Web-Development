import React from 'react'
import { useState,useEffect } from 'react';
import useFetch from './useFetch';
//Custome hooks allow us to use a fucntion like fetch data without repeating every code
//When we create a hook file, it should start with small letter

const CustomHooks = () => {

  const [data,setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setData(data));
  },[]);

  //UseFetch

  const [datas] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <div>
      <h1>Custom Hooks</h1>

      <h2>Using No Hooks</h2>
      {data && data.map(item => {
        return item.id < 10 && <p key={item.id}>{item.title}</p>
      })}

      <br />

      <h2>Using Custom useFetch Hooks</h2>
      {datas && datas.map(item => {
        return item.id < 10 && <p key={item.id}>{item.title}</p>
      })}
      <p>----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p> 
    </div>
  )
}

export default CustomHooks