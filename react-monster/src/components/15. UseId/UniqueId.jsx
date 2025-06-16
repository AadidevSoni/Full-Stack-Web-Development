import React from 'react'
import { useId } from 'react'

const UniqueId = () => {

  const id = useId();

  return (
    <div>
      <h1>UseId</h1>
      <label htmlFor={`${id}-email`}>Email</label>
      <input type="email" id={`${id}-email`} />

      <br />

      <label htmlFor={`${id}-password`}>Email</label>
      <input type="email" id={`${id}-password`} />
    </div>
  )
}

export default UniqueId