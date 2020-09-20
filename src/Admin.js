import React from "react";
import { fire } from "./firebase";
import NewOrders from "./components/adminComp/NewOrders";
import CompletedOrders from "./components/adminComp/CompletedOrders";

function Admin() {
  return (
    <div>
      <h1>You are logged in as an Admin</h1>
      <NewOrders />
      <CompletedOrders />
      <button
        onClick={() => {
          fire.auth().signOut();
        }}
      >
        log Out
      </button>
    </div>
  );
}

export default Admin;
