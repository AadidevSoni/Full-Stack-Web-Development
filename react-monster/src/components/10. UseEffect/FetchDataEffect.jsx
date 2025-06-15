import React from 'react'
import { useState , useEffect } from "react";

const FetchDataEffect = () => {

  const [data,setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      if(data && data.length) setData(data);
    }

    getData();
  })

  return (
    <div>
      <ul>
        <h2>First post title: </h2>
        {data.length > 0 ? <h3>{data[0].title}</h3> : <h3>Loadign title</h3>};
      </ul>
      <p>----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p> 
    </div>
  )
}

export default FetchDataEffect