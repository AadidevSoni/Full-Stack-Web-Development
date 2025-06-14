function Greet(){

  let msg = "Bonjour!";
  let date = new Date();

  return <section>
    <p>{msg}</p>
    <h3>Today's Date: {date.toDateString()}</h3>
    <p>----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
  </section>;
}

//or const Greet = () => {}

export default Greet;