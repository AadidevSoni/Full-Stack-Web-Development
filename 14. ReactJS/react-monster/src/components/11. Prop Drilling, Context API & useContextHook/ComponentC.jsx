import React from 'react'
import { Data } from '../../App'
import { Hobbies } from '../../App'
import { useContext } from 'react'

//You can also put hobbies.consumer inside the data.consumer's return so that you can return a p with both age and hobbies

//useContext -  better way to access a data from one component iin tree to anohter
const ComponentC = ({name}) => {

  const age = useContext(Data);
  const hobbies = useContext(Hobbies);

  return (
/*  
    Using Prop drilling and conect API is more innefective
    <div>
      <Data.Consumer>
        {(age) => {
          return <h3>{age}</h3>
        }}
      </Data.Consumer>

      <Hobbies.Consumer>
        {(hobbies) => (
          <ul>
            {Array.isArray(hobbies) &&
              hobbies.map((hobby, index) => (
                <li key={index}>{hobby}</li>
              ))}
          </ul>
        )}
      </Hobbies.Consumer>
    </div>
*/ 
  <div>
    <h2>Age: {age}</h2>
    <p>----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>  
  </div>
  )
}

export default ComponentC