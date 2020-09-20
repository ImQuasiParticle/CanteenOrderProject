import React from "react";
import { fire } from "./firebase";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { BrowserRouter, Switch, Link, Route } from "react-router-dom";
import NewOrders from "./components/adminComp/NewOrders";
import CompletedOrders from "./components/adminComp/CompletedOrders";
function Admin() {
  return (
    <BrowserRouter>
      <div>
        <AppBar position="static">
          <Toolbar>
            <Button color="inherit" component={Link} to={"neworders"}>
              NewOrders
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
            <Route exact path="/neworders" component={NewOrders} />
            <Route exact path="/completedorders" component={CompletedOrders} />
          </React.StrictMode>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default Admin;
