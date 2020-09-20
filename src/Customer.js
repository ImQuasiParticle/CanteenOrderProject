import React from "react";
import { fire } from "./firebase";
import UserOrders from "./components/customerComp/UserOrders";
import CompletedUserOrders from "./components/customerComp/CompletedUserOrders";

function Customer() {
  return (
    <div>
      <h1>You are logged in as customer</h1>
      <UserOrders />
      <CompletedUserOrders />
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

export default Customer;
