import React from "react";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { Link, NavLink } from "react-router-dom";
import { fire } from "../../firebase";

function CustomerNav({ setUser }) {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to={"/customerbooking"}>
            Book
          </Button>
          <Button color="inherit" component={Link} to={"/customerorders"}>
            Orders
          </Button>
          <Button
            color="inherit"
            component={Link}
            to={"/customercompletedorders"}
          >
            Completed
          </Button>
          <Button
            component={NavLink}
            to={"/"}
            onClick={() => {
              fire.auth().signOut();
              setUser(null);
            }}
          >
            log Out
          </Button>
        </Toolbar>
      </AppBar>
      <br />
    </div>
  );
}

export default CustomerNav;
