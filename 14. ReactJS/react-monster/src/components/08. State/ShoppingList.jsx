import React from 'react'
import { useState } from "react";

const ShoppingList = () => {

  const [cart,setCart] = useState([]);
  const [name,setName] = useState('');
  const [quantity,setQuantity] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if(!name || !quantity) return;

    const newItem = {
      name,
      quantity:parseInt(quantity)
    };

    setCart((prevItem) => [...prevItem,newItem]);
    setName("");
    setQuantity("");
  };

  return (
    <div>
      <h1>Shopping List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Item Name' value = {name} onChange={e=>setName(e.target.value)} />
        <input type="number" placeholder='Quantity' value = {quantity} onChange={e=>setQuantity(e.target.value)} />
        <button type = "submit">Add Item</button>
      </form>

      <h2>List</h2>
      <ul>
        {cart.map((cartItem,index) => (
          <li key = {index}>
            {cartItem.name} - {cartItem.quantity}
          </li>
          ))}
      </ul>
      <p>----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p> 
    </div>  
  )
}

export default ShoppingList