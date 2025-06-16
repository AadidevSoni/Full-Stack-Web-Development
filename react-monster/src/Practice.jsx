import React from 'react'
import "./PracticeComponents/index.css";
import { useState } from 'react';

const Header = () => {
  return <div>
    <h1 style ={{display: "flex",alignItems: "center",justifyContent: "center"}}>WELCOME TO MY WEBSITE</h1>
    <nav style ={{display: "flex",alignItems: "center",justifyContent: "center"}}>
      <a href="" style={{marginRight: "20px"}}>Home</a>
      <a href="" style={{marginRight: "20px"}}>About</a>
      <a href="" style={{marginRight: "20px"}}> Contact</a>
    </nav>
  </div>
}

const List = () => {

  const nums = [1,2,3,4,5,6,7,8,9,10];
  let sum = 0;

  const getSum = () => {
      nums.map(num => (
        sum += num
      ))
  }

  return (
    <div>
      {getSum()}
      <h2>List: [{nums}]</h2>
      <h3>Sum: {sum}</h3>
    </div>
  )
}

const ListNew = () => {
  const users = [
    {id: 1, name: "Aadidev"},
    {id: 2, name: "Asher"},
    {id: 3, name: "Nael"}
  ]

  return <div>
    {
      users.map(user => (
        <ul key={user.id}>
          <li>{user.name}</li>
        </ul>
      ))
    }
  </div>
}

const User = (prop) => {
  return <div>
    <img src={prop.img} width={200} height={200} style ={{borderRadius:"50px",display:"cover",position:"center"}}/>
    <h2>Name: {prop.name}</h2>
  </div>
}

const Drink = () => <h2>You are a MAJOR!</h2>
const NoDrink = () => <h2>You are a MINOR!</h2>

const Person = ({age}) => {
  if(age >= 18){
    return <Drink />
  }else {
    return <NoDrink />
  }
}

const Random = () => {
  const [num,setNum] = useState(() => {
     Math.floor(Math.random() * 100)
  })

  const randomisation = () => {
    let number = Math.floor(Math.random() * 100)
    setNum(number);
  }

  return <div>
    <h1>Random: {num}</h1>
    <button onClick={randomisation}>Randomize</button>
  </div>
}

const Updating = () => {
  const [name,setName] = useState("");

  const clearName = () => {
    setName("");
  }

  return <div>
    <h1>Name: {name}</h1>
    <input type="text" value={name} placeholder='Enter Name' onChange={e => setName(e.target.value)} />
    <button onClick={clearName}>Clear</button>
  </div> 
}

const ToDo = () => {
  const [todo,settodo] = useState([]);
  const [inputV,setInputV] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if(inputV.trim()){
      settodo([...todo , inputV])
      setInputV("");
    }
  }

  const clearIt = () => {
    settodo([]);
  }

  return <div>
    <h1>LIST: </h1>
    {
      todo.map(todos => (
        <ul key={Math.random()}>
          <li>{todos}</li>
        </ul>
      ))
    }
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputV} placeholder="Enter To Dos" onChange={e => setInputV(e.target.value)} />
      <button type = "submit">Submit</button>
    </form>
    <button onClick={clearIt}>Clear</button>
  </div>
}

const Profile = () => {

  const [profile,setProfile] = useState({name: "", age: ""});



  return <div>
    <input type="text" value={profile.name} placeholder='Enter name' onChange={e => setProfile({...profile, name: e.target.value})}/>
    <input type="number" value={profile.age} placeholder='Enter age' onChange={e => setProfile({...profile, age: e.target.value})}/>

    <h2>Name: {profile.name}</h2>
    <h2>Age: {profile.age}</h2>
  </div>
}

const Shopping = () => {

  const [item,setItem] = useState([])
  const [name,setName] = useState("");
  const [num,setNum] = useState(0);

  const handleSubmit = e => {
    e.preventDefault();
    if(!name || !num){
      return;
    }

    const newItem = {
      name,
      quantity: parseInt(num)
    };
    setItem((prevItem) => [...prevItem,newItem]);
    setName("");
    setNum("");
  }

  return <div>
    <form onSubmit={handleSubmit}>
      <h1>Item</h1>
      <input type="text" value={name} placeholder='Enter Item' onChange={e => setName(e.target.value)}/>
      <h1>Quantity</h1>
      <input type="number" value={num} placeholder='Enter Quantity' onChange={e => setNum(e.target.value)}/>
      <button type='submit'>Add Item</button>
    </form>
    <h1>Cart</h1>
      <ul>
        {item.map((cartItem,index) => (
          <li key = {index}>
            {cartItem.name} - {cartItem.quantity}
          </li>
          ))}
      </ul>
  </div>
}

const Practice = () => {

  const [count,setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  const [friends,setFriends] = useState(["Aadidev","Asher"]);
  const addFriend = () => setFriends([...friends,"Nael"]);
  const removeFriend = () => setFriends(friends.filter(f => f !== "Aadidev"));
  const updateFriend = () => setFriends(friends.map(f => (f=== "Nael" ? "Stephen":f)));

  return (
    <div>
      <h1 style={{display: "flex", alignItems: "center"}}>PRACTICE</h1>
      <Header />
      <List />
      <ListNew />
      <User img="https://images.pexels.com/photos/26797335/pexels-photo-26797335/free-photo-of-scenic-view-of-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        name = "Aadidev" age={18}
      />
      <Person age={15} />
      <h1>Count: {count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>

      <h1>Friends</h1>
      {
        friends.map(friend => (
          <ul key={Math.random()}>
            <li>{friend}</li>
          </ul>
        ))
      }
      <button onClick={addFriend}>Add Friend</button>
      <button onClick={removeFriend}>Remove Friend</button>
      <button onClick={updateFriend}>Update Friend</button>
      <Random />
      <Updating />
      <ToDo />
      <Profile />
      <Shopping />
    </div>
  )
}

export default Practice