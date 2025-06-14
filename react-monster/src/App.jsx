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
import Person from "./components/4. Props/Person";
import Product from "./components/4. Props/Product";
import Card from "./components/4. Props/Card";
import Weather from "./components/5. Conditional Rendering/Weather";
import UserStatus from "./components/5. Conditional Rendering/UserStatus";
import Greeting from "./components/5. Conditional Rendering/Greeting";
import "./components/6. Style/index.css";
import { TiShoppingCart } from "react-icons/ti";
import StyledCard from "./components/6. Style/StyledCard";
import ProfileCard from "./components/6. Style/ProfileCard";
import IconComponent from "./components/7. React Icons/IconComponent";

//Parent component
// Props allow us to pass dara from parent to child component

//Conditional rendering
const ValidPassword = () => <h1>Valid Password</h1>;
const InvalidPassword = () => <h1>Invalid Password</h1>;

const Password = ({isValid}) => {
  if(isValid) {
    return <ValidPassword/>
  }else {
    return <InvalidPassword/>
  }

  //return isValid? <ValidPassword/> : <InvalidPassword />   
};

const Cart = () => {
  const items = ["Laptop","Phone","Power Bank","Charger"];

  return <div>
    <h1>Cart</h1>
    {items.length > 0 && <h2>You have {items.length} items in your cart</h2> /*It will only run if the condiiton is true*/};

      <h4>Products</h4>
    <ul>
      {
        items.map(item => (
          <li key = {Math.random()}>{item}</li>
        ))
      }

    </ul>
  </div>
}

function App() {

  //Styles  
  const styles = {color: "green",backgroundColor: "lightblue",padding:"2rem"};

  //return <h1>Aadi Web Dev</h1>;
  return(
    <div>
      <Header/>
      {/*<MainContent/>
      <Add/>
      <Greet/>
      <ProductInfo/>
      <Lists/>
      <ListChallenge/>
      <User img = "https://images.unsplash.com/photo-1743701168271-15d33fac46e8?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            name = "Aadidev" age = {18} isMarried = {false} hobbies = {["Drawing","Painting"]}/>
      <Person name = "Aadi" age = {18}/>
      <Product name = "Macbook Pro" price = {200000}/>
      
      <Card>
        <h2>Name: Iphone</h2>
        <p>Price: 1,00,000</p>
      </Card>
      <Card>
        <h2>Name: S23 FE</h2>
        <p>Price: 50,000</p>
      </Card>

        <Password isValid = {true}/>
        <Cart/>
        <Footer/>

        <Weather temp={30}/>
        <UserStatus loggedIn = {true} isAdmin={true}/>
        <Greeting timeOfDay="morning"/>

      <section>
        <h1 style = {{color: "green",backgroundColor: "lightblue",padding:"2rem"}}>Inline Style</h1>
        <h2 style = {styles}>Text</h2>
      </section>

      <h3 style = {{color:"white",fontSize:"3rem"}}>Shop NOW  <TiShoppingCart /></h3>

      <StyledCard />
      <ProfileCard/>
      <IconComponent/>*/}
      

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
