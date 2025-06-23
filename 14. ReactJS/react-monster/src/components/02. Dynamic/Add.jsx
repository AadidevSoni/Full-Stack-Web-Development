const Add = () => {

  const myName = "Aadidev";
  const multiply = (a,b) => a*b;
  const specialClass = 'simple-class';

  return (
    <section>
      <h1>Dynamic Content</h1>
      <h3>{myName}</h3>
      <p>My num list: {[1,2,3,4,5,6]}</p>
      <div style = {{color:"white"}}>2+2 = {2+2}</div>
      <p>2 x 2 = {multiply(2,2)}</p>
      <p className={specialClass}>This element's class is simple-class and it is assigned dynamically</p>
      <p>----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
    </section>
  )
}

export default Add