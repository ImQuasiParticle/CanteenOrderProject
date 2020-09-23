import React from 'react';
import { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { Remove, Add } from '@material-ui/icons';
//import Order from '../Order.js';

let array = [];

function Book() {
  const [cartItems, setCartItems] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    db.collection('items').onSnapshot((snapshot) => {
      setItems(
        snapshot.docs.map((doc) => ({
          id: doc.id,
        }))
      );
    });
    console.log('hiii', items);
  }, []);

  const addItem = (prop) => {
    console.log('Helloooo');
    array.push(prop);
    setCartItems(array);
    console.log(array);
  };
  const removeItem = (prop) => {
    if (array.includes(prop)) {
      var i = array.indexOf(prop);
      array.splice(i, 1);
      setCartItems(array);
      console.log(array);
    }
  };
  return (
    <div>
      <button onClick={() => addItem('noodles')}>noodles</button>
      <h1 onClick={() => addItem('french fries')}>french fries</h1>
      <h1>water Bottle</h1>
      {items.map(({ id }) => (
        <div>
          <Remove onClick={() => removeItem(id)} />
          {id}
          <Add onClick={() => addItem(id)} />
        </div>
      ))}
    </div>
  );
}

export default Book;
