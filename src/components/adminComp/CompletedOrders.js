import React from "react";
import { useState, useEffect } from "react";
import Order from "../Order";
import { db } from "../../firebase";
import AdminNav from "./AdminNav";

function CompletedOrders(props) {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const unSubscribe = db
      .collection("orders")
      .where("status", "==", "Completed")
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
      <AdminNav setUser={props.setUser} />
      {orders.map(({ id, order }) => (
        <Order orderId={id} order={order} key={id} />
      ))}
    </div>
  );
}

export default CompletedOrders;
