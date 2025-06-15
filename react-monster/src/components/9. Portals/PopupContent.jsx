import React from 'react'
import {createPortal} from "react-dom";

const PopupContent = ({copied}) => {
  return createPortal(
    <section>
      {copied && (
        <div style = {{color:"white"}}>Copied to clipboard</div>
      )}
    </section>,
    document.querySelector("#popup-content") //The section is now gonna be placed inside the popup content dic in the index.html using portals
  )
}

export default PopupContent