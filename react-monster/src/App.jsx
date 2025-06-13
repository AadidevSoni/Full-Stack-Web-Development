//Below is a component which is a function in JS and each component in the web has its own componenet
//Component name must start with uppercase
//It has to return a HTML. 
//In react, each component in website will ahve itsown html css and js and we integrate all of them together to build a proper website
import Add from "./components/Add";
import Footer from "./components/Footer";
import Greet from "./components/Greet";
import Header from "./components/Header";
import ListChallenge from "./components/listChallenge";
import Lists from "./components/Lists";
import MainContent from "./components/MainContent";
import ProductInfo from "./components/ProductInfo";

function App() {

  //return <h1>Aadi Web Dev</h1>;
  return(
    <div>
      <Header/>
      <MainContent/>
      <Add/>
      <Greet/>
      <ProductInfo/>
      <Lists/>
      <ListChallenge/>
      <Footer/>
    </div>
  );
};

export default App;
