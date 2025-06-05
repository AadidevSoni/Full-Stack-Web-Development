const insert = document.getElementById("insert");

//To listen to the whole window
window.addEventListener("keydown",event => {
  insert.innerHTML = `
    <div class = "key">
      ${event.key === ''?"Space":event.key}
      <small>event.key</small>
    </div>
    <div class = "key">
      ${event.keyCode}
      <small>event.keyCode</small>
    </div>
    <div class = "key">
      ${event.code}
      <small>event.code</small>
    </div>
  `
})