//Below is a component which is a function in JS and each component in the web has its own componenet
//Component name must start with uppercase
//It has to return a HTML. 
//In react, each component in website will ahve itsown html css and js and we integrate all of them together to build a proper website
import Add from "./components/2. Dynamic/Add";
import Footer from "./components/1. JSX/Footer";
import Greet from "./components/2. Dynamic/Greet";
import Header from "./components/1. JSX/Header";
import ListChallenge from "./components/3. Lists/ListChallenge";
import Lists from "./components/3. Lists/Lists";
import MainContent from "./components/1. JSX/MainContent";
import ProductInfo from "./components/2. Dynamic/ProductInfo";

//Parent component
// Props allow us to pass dara from parent to child component

function App() {

  //return <h1>Aadi Web Dev</h1>;
  return(
    <div>
      <Header/>
      {/*<MainContent/>
      <Add/>
      <Greet/>
      <ProductInfo/>
      <Lists/>
      <ListChallenge/>*/}
      <User img = "https://images.unsplash.com/photo-1743701168271-15d33fac46e8?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            name = "Aadidev" age = {18} isMarried = {false} hobbies = {["Drawing","Painting"]}/>
      <Footer/>
    </div>
  );
};

//Child compoennt
const User = (props) => { //We can destructure prop just like we destructured the list
  //console.log(props);  Pastting data from parent to child component
  return <section>
    <img src={props.img} width={200}/>
    <p>Name: {props.name} </p>
    <p>Age: {props.age} </p>
  </section>;
}

export default App;
