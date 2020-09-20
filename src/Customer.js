import React from "react";
import { fire } from "./firebase";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { BrowserRouter, Switch, Link, Route, Redirect } from "react-router-dom";
import UserOrders from "./components/customerComp/UserOrders";
import CompletedUserOrders from "./components/customerComp/CompletedUserOrders";
function Customer() {
  return (
    <BrowserRouter>
      <div>
        <AppBar position="static">
          <Toolbar>
            <Button color="inherit" component={Link} to={"userorders"}>
              UserOrders
            </Button>
            <Button color="inherit" component={Link} to={"completedorders"}>
              CompletedOrders
            </Button>
            <Button
              component={Link}
              to={"/"}
              onClick={() => {
                fire.auth().signOut();
              }}
            >
              log Out
            </Button>
          </Toolbar>
        </AppBar>

        <Switch>
          <React.StrictMode>
            <Route exact path="/userorders" component={UserOrders} />
            <Route
              exact
              path="/completedorders"
              component={CompletedUserOrders}
            />
          </React.StrictMode>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default Customer;
