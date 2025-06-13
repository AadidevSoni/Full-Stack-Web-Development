const Add = () => {

  const myName = "Aadidev";

  const multiply = (a,b) => a*b;

  const specialClass = 'simple-class';

  return (
    <section>
      <div>2+2 = {2+2}</div>
      <h1>{myName}</h1>
      <p>My num list: { [1,2,3,4,5,6]}</p>
      <p>2 x 2 = {multiply(2,2)}</p>
      <p className={specialClass}>This element's class is simple-class and it is assigned dynamically</p>
    </section>
  )
}

export default Add