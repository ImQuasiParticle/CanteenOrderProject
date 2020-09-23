import React from "react";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { Link, NavLink } from "react-router-dom";
import { fire } from "../../firebase";

function CustomerNav({ setUser }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" component={Link} to={"/customerhome"}>
          Book
        </Button>
        <Button color="inherit" component={Link} to={"/customeruserorders"}>
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
  );
}

export default CustomerNav;
