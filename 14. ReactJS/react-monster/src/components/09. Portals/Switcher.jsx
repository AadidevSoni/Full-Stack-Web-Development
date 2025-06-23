import React from 'react'
import { useState } from 'react'

const Switcher = () => {

  const [sw,setsw] = useState(false);

  //Makign a unique input field by providing a key
  return (
    <div>
      {
        sw ? (
          <span>Dark</span>
        ) : (
          <span>Light</span>
        )
      }

      <br />

      <input type="text" key={sw ? "Dark":"Light"} /> 
      <button onClick={() => setsw((s) => !s)}>Switch</button>
    </div>
  )
}

export default Switcher