//Below is a component which is a function in JS and each component in the web has its own componenet
//Component name must start with uppercase
//It has to return a HTML. 
//In react, each component in website will ahve itsown html css and js and we integrate all of them together to build a proper website
import Greet from "./components/Greet";

function App() {

  //return <h1>Aadi Web Dev</h1>;
  return(
    <div>
      <Greet/>
    </div>
  );
};

export default App;
