//Below are components which is a function in JS and each element in the web has its own componenet
//Component name must start with uppercase , It has to return a HTML. 
//In react, each component in website will have its own html css and js and we integrate all of them together to build a website
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
import { useState } from "react";
import ComponentOne from "./components/8. State/componentOne";
import ComponentTwo from "./components/8. State/componentTwo";
import ExampleOne from "./components/8. State/ExampleOne";
import ExampleTwo from "./components/8. State/ExampleTwo";
import ExampleThree from "./components/8. State/ExampleThree";
import JSRules from "./components/1. JSX/JSRules";

//Parent component : Props allow us to pass data from parent to child component
//Child component
const User = (props) => { //We can destructure prop just like we destructured the list
  //console.log(props);  Pastting data from parent to child component
  return <section>
    <div style = {{display:"flex",alignItems:"center"}}>
      <img src={props.img} width={200} height={250} style ={{borderRadius:"50px",display:"cover",position:"center"}}/>
      <div style={{transform:"translateX(100px)"}}>
        <h2>Name: {props.name} </h2>
        <h2>Age: {props.age} </h2>        
      </div>
    </div>

    <p>----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
  </section>;
}

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
  const items = ["Laptop","Phone","Power Bank","Charger"]

  return <div>
    <h1>Cart</h1>
    {items.length > 0 && <h2>You have {items.length} items in your cart</h2> /*It will only run if the condiiton is true*/}           

    <h3>Products</h3>
    <ul>
      {
        items.map(item => (
          <li key = {Math.random()}>
            {item}
          </li>
        ))
      }
    </ul>
    <p>----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p> 
  </div>
}

//Events
const Button = () => {
  return <button onClick={() => console.log("You clicked me")}>Click</button>
  //return <button onClick={functionName}>Click</button>
}

const Copy = () => {

  const copyHandler = () => {
    console.log("Stop stealing my content");
  }

  return <p onCopy={copyHandler}>Lorem ipsum, dolor sit amet.possimus voluptatibus impedit tempore soluta voluptatem! Tenetur, hic assumenda modi maiores nobis similique, ex neque, minus fuga cum excepturi!</p>
}

const Move = () => {

  function moveHandler() {
    console.log("Mouse move event fired");
  }

  return <p onMouseMove={moveHandler}>Lorem ipsum. Eius earum itaque repellat nihil, voluptatem odit, magni iusto tempore nostrum doloremque impedit saepe perspiciatis at vel placeat ipsum harum, distinctio sed?</p>
}

function App() {

  //Styles  
  const styles = {color: "white",backgroundColor: "rgba(40,42,42,1)",padding:"2rem"};

  //State
  //We have to first import the useState
  const counter = useState(0); //initial value 0
  //console.log(counter);

  //Destructuring initial and setState using array destructuring
  const [count,setCount] = useState(0);

  const increment = () => setCount(count+1);
  const decrement = () => setCount(count-1);

  //useState for array
  const [friends,setFriends] = useState(["Friend 1","Friend 2"]);
  const addFriend = () => setFriends([...friends,"New Friend"]);
  const removeFriend = () => setFriends(friends.filter(f => f !== "New Friend"));
  const updateOne= () => {
    setFriends(friends.map(f => f === 'New Friend' ? "Best Friend" : f));
  }

  //useState for objects
  const [movie,setMovie] = useState({
    title: "Jaws",
    ratings: 10,
  });
  let rate = movie.ratings;
  const handleClick = () => {
    /*
    const copyMovie = {
      ...movie,
      ratings: 5
    }
    setMovie(copyMovie);
    */
    rate--;
    setMovie({...movie,ratings: rate});
  }

  //Array of objects
  const [movies,setMovies] = useState([
    {id:1,title:"Spiderman",rating:9},
    {id:2,title:"Mario",rating:7},
  ]);

  const clickHandler = () => {
    setMovies(movies.map(m => m.id === 1 ? {...movies,title:"Jumanji"}:m));
  }

  //Sharing states to other compnents
  const[counts,setCounts] = useState(0);

  return(
    <div>
      <Header/>
      <MainContent/>
      <JSRules />
      <Add/>
      <Greet/>
      <ProductInfo/>
      <h1>Lists</h1>
      <Lists/>
      <ListChallenge/>
      <h1>Props</h1>
      <User img = "https://images.unsplash.com/photo-1743701168271-15d33fac46e8?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            name = "Aadidev" age = {18} isMarried = {false} hobbies = {["Drawing","Painting"]}
      />

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

      <p>----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p> 
      
      <Password isValid = {true}/>

      <p>----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p> 

      <Cart/>
      <Footer/>
      <h1>Conditional Rendering</h1>
      <Weather temp={30}/>

      <p>----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p> 
      <UserStatus loggedIn = {true} isAdmin={true}/>
      <Greeting timeOfDay="morning"/>

      <h1>Style</h1>
      <section>
        <h1 style = {{color: "white",backgroundColor: "rgba(40,42,42,1)",padding:"2rem"}}>Inline Style</h1>
        <h2 style = {styles}>Text</h2>
        <p>----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>   
      </section>

      <h1>React Icons</h1>
      <h3 style = {{color:"white",fontSize:"3rem"}}>Shop NOW  <TiShoppingCart /></h3>
      <p>----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p> 

      <StyledCard />
      <ProfileCard/>
      <IconComponent/>

      <h1>Events</h1>
      
      <Button/>
      <p>----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p> 

      <Copy/>
      <p>----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p> 

      <Move/>
      <p>----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p> 

      <h1>States</h1>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>

       <p>----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p> 

      {
        friends.map(f => (
          <li key = {Math.random()}>{f}</li>
        ))
      }

      <button onClick = {addFriend}>Add New Friend</button>
      <button onClick={removeFriend}>Remove Friend</button>
      <button onClick = {updateOne}>Update Friend</button>

      <p>----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p> 

      <h2>Title: {movie.title}</h2>
      <h2>Ratign: {movie.ratings}</h2>
      <button onClick={handleClick}>Change Rating</button>

      <p>----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p> 

      {movies.map(m => (
        <li key = {Math.random()}>
          {m.title}
        </li>
      ))}
      <button onClick={clickHandler}>Change Name</button>

      <p>----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p> 

      <ComponentOne counts ={counts} onClickHandler={() => setCounts(counts+1)}/>
      <ComponentTwo counts ={counts} onClickHandler={() => setCounts(counts+1)}/>

      <p>----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p> 

      <ExampleOne />
      <ExampleTwo />
      <ExampleThree />
      
    </div>
  );
};

export default App;