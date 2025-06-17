import React from 'react'
import "./style.css";
import { useState } from 'react';

const ColorToggler = () => {

  const [backgroundColor,setBackgroundColor] = useState("white");
  const [textColor,setTextColor] = useState("#1b1b1b");
  const [btnStyle,setBtnStyle] = useState("white");

  const handleClick = () => {
    setBackgroundColor(backgroundColor == 'white' ? '#1b1b1b' : 'white');
    setTextColor(textColor == '#1b1b1b' ? '#ffa31a' : '#1b1b1b');
    setBtnStyle(backgroundColor == 'white' ? '#1b1b1b' : 'white');
  }

  return (
    <div style={{backgroundColor, color: textColor}}>
      <button onClick={handleClick} style={{btnStyle, color: textColor, border: `2px solid ${textColor}`}}>
        {backgroundColor == "#1b1b1b" ? "Black Theme" : "White Theme"}
      </button>

      <section className="content">
        <h1>Welcome to Color Toggler</h1>
      </section>
    </div>
  )
}

export default ColorToggler