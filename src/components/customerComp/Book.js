import React from 'react';
import { useState, useEffect } from 'react';
import { db } from '../../firebase';
let array = [];
let allItems = [];

function Book() {
  const [cartItems, setCartItems] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const unSubscribe = db.collection('items').then((doc) => {
      if (doc.exists) {
        console.log(doc);
      }
    });
    return () => {
      unSubscribe();
    };
  });

  const addItem = (prop) => {
    console.log('Helloooo');
    array.push(prop);
    setCartItems(array);
    console.log(array);
  };
  return (
    <div>
      <button onClick={() => addItem('noodles')}>noodles</button>
      <h1 onClick={() => addItem('french fries')}>french fries</h1>
      <h1>water Bottle</h1>
      {cartItems.map((cartItem) => (
        <h1>{cartItem}</h1>
      ))}
    </div>
  );
}

export default Book;
