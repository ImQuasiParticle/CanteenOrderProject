import React from "react";
import { useState, useEffect } from "react";
import Order from "../Order";
import { db } from "../../firebase";
import AdminNav from "./AdminNav";

function ReceivedOrders(props) {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const unSubscribe = db
      .collection("orders")
      .where("status", "==", "Received")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setOrders(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            order: doc.data(),
          }))
        );
      });
    return () => {
      unSubscribe();
    };
  }, []);

  function statusButton(props) {
    db.collection("orders").doc(props).update({
      status: "Completed",
      awaitStatus: "Complete",
    });
    console.log(props);
  }

  return (
    <div>
      <AdminNav setUser={props.setUser} />

      {orders.map(({ id, order }) => (
        <Order
          statusButton={statusButton}
          orderId={id}
          order={order}
          key={id}
        />
      ))}
    </div>
  );
}

export default ReceivedOrders;
