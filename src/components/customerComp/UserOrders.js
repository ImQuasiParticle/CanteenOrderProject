import React from "react";
import { useState, useEffect } from "react";
import Order from "../Order";
import { fire, db } from "../../firebase";

function UserOrders({ user }) {
  const [orders, setOrders] = useState([]);
  console.log(user);

  useEffect(() => {
    const unSubscribe = db
      .collection("orders")
      .where("status", "==", "Pending" || "Received")
      .where("name", "==", user.displayName)
      // .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setOrders(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            order: doc.data(),
          }))
        );
      });
    console.log(orders);
  }, []);

  return (
    <div>
      {orders.map(({ id, order }) => (
        <Order orderId={id} order={order} key={id} />
      ))}
    </div>
  );
}

export default UserOrders;
