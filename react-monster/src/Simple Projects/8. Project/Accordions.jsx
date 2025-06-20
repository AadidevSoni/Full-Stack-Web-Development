import React from 'react'
import "./style.css";
import { useState } from 'react';

const Accordions = ({title,content}) => {

  const [isActive,setIsActive] = useState(false);

  return (
    <section className="accordion-card" key={Math.random()}>
      <div className="header" style={{cursor: "pointer"}} onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <p className="icon">
          {isActive ? '-' : '+'}
        </p>
      </div>

      <div className="content">
        {isActive && <p className='card-info'>{content}</p>}
      </div>
    </section>
  )
}

export default Accordions