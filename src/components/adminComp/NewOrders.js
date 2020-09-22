import React from "react";
import { useState, useEffect } from "react";
import Order from "../Order";
import { db } from "../../firebase";

function NewOrders() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const unSubscribe = db
      .collection("orders")
      .where("status", "==", "Pending")
      // .orderBy("timestamp", "desc")
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
      status: "Received",
      awaitStatus: "Completed",
    });
    console.log(props);
  }

  return (
    <div>
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

export default NewOrders;
