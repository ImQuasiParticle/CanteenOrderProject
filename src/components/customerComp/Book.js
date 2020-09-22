import React from "react";
import { useState } from "react";

function Book() {
  const [cartItems, setCartItems] = useState([]);
  let array = [];
  return (
    <div>
      <button
        onClick={() => {
          console.log("noodles");
          array.concat("noodles");
          setCartItems(array);
        }}
      >
        noodles
      </button>
      <h1>french fries</h1>
      <h1>water Bottle</h1>
      {cartItems.map((cartItem) => (
        <h1>{cartItem}</h1>
      ))}
    </div>
  );
}

export default Book;
