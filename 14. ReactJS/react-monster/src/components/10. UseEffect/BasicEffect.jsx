import { useState , useEffect } from "react";
import React from 'react'

const BasicEffect = () => {

  const [value,setValue] = useState(0);

  useEffect(() => {
    console.log("Value Changed");
  },[]);

  return (
    <div>
      
    </div>
  )
}

export default BasicEffect