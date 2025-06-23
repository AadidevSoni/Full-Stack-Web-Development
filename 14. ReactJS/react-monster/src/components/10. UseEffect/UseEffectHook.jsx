import { useState , useEffect } from "react";
import React from 'react'
//we use useEffect hook when a component renders for the first time, it re renders or some data in component is changed

const UseEffectHook = () => {

  const [value,setValue] = useState(0);
  const [something,setSomething] = useState(0); //This state change wont trigger useeffetc if we  provide the dpeendency array with value in it

  //Use effect takes a callback ffunction and a dependency array
  //IF we dont give dependency array, it will run the useEffect every time it renders
  //If we give  an empty dependency array, it only renders once
  /*
  useEffect(() => {
    console.log("Call use effect");
    document.title = `Increment ${value}`
  });

  useEffect(() => {
    console.log("Call use effect");
    document.title = `Increment ${value}`
  },[]);
  */

  /*The below code makes i such that the useEffect will only be fired if the value re renders that is if the value chanages nopt any other state
  useEffect(() => {
    console.log("Call use effect");
    document.title = `Increment ${value}`
  },[value]);*/

  /*For the useEffec to triggfer if either of the state is chnanged
  useEffect(() => {
    console.log("Call use effect");
    document.title = `Increment ${value}`
  },[value,something]);*/

  useEffect(() => {
    if(value > 0) {
      console.log("Call use effect");
      document.title = `Increment ${value}`
    }
  },[value]);



  return (
    <div>
      <h2>{value}</h2>
      <button onClick={() => setValue(value+1)}>Click</button>
      <button onClick={() => setSomething(something+1)}>Something</button>
      <p>----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p> 
    </div>
  )
}

export default UseEffectHook