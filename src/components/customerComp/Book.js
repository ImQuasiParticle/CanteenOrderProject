import React from "react";
import { useState, useEffect } from "react";
import { db } from "../../firebase";
let array = [];

function Book() {
  const [cartItems, setCartItems] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const unsubscribe = db
      .collection("items")

      // .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setItems(
          snapshot.docs.map((doc) => ({
            id: doc.id,
          }))
        );
      });
    console.log(items);
  }, []);

  const addItem = (prop) => {
    console.log("Helloooo");
    array.push(prop);
    setCartItems(array);
    console.log(array);
  };
  return (
    <div>
      <button onClick={() => addItem("noodles")}>noodles</button>
      <h1 onClick={() => addItem("french fries")}>french fries</h1>
      <h1>water Bottle</h1>
      {items.map(({ id }) => (
        <h1>{id}</h1>
      ))}
    </div>
  );
}

export default Book;
