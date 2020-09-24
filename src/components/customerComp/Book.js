import React from "react";
import { useState, useEffect, useCallback } from "react";
import { db } from "../../firebase";
import { Remove, Add } from "@material-ui/icons";
import CustomerNav from "./CustomerNav";
import firebase from "firebase";
//import Order from '../Order.js';
const array = [];
function Book({ user, setUser }) {
  const [cartItems, setCartItems] = useState([]);
  const [menu, setMenu] = useState([]);

  let [count, setCount] = useState(0);

  useEffect(() => {
    db.collection("items").onSnapshot((snapshot) => {
      setMenu(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          item: doc.data(),
        }))
      );
    });
  }, []);

  const addItem = ({ id, item }) => {
    if (cartItems.filter((item) => item.itemName == id).length == 0) {
      setCartItems((prevArray) =>
        prevArray.concat({ itemName: id, qty: 1, price: item.price })
      );
      // array.push({ itemName: id, qty: 1, price: item.price });
    } else {
      let index = cartItems.findIndex((obj) => obj.itemName === id);
      console.log(index);
      cartItems[index].qty += 1;
      cartItems[index].price += item.price;
      // cartItems.filter((add) => {
      //   add.qty = add.qty + 1;
      //   add.price += item.price;
      //   // setCount(count + item.price);
      // });
    }
    setCount(count + item.price);
    // setCartItems(array);
  };
  // console.log(cartItems);
  const removeItem = (prop) => {
    if (array.includes(prop)) {
      var i = array.indexOf(prop);
      array.splice(i, 1);
      setCartItems(array);
      console.log(array);
    }
  };
  function booking() {
    db.collection("orders").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      name: user.displayName,
      email: user.email,
      orderItems: cartItems,
      status: "Pending",
      awaitStatus: "Receive",
      totalAmount: count,
    });
    setCount(0);
    setCartItems([]);
  }
  return (
    <div>
      <CustomerNav setUser={setUser} />
      {menu.map(({ id, item }) => (
        <div>
          <Remove onClick={() => removeItem(id, item)} />
          {id}
          <Add
            onClick={() => {
              addItem({ id, item });
            }}
          />
          {item.price}
        </div>
      ))}
      <button
        onClick={() => {
          booking();
        }}
      >
        book
      </button>
      <div>
        {cartItems.map((item) => (
          <div>
            {item.itemName} {item.qty}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Book;
