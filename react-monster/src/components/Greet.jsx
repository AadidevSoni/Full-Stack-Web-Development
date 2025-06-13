function Greet(){

  let msg = "Bonjour!";
  let date = new Date();

  return <section>
    <h1>{msg}</h1>
    <p>{date.toDateString()}</p>
  </section>;
}

//or const Greet = () => {}

export default Greet;