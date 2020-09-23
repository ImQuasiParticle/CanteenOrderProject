import React from "react";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { Link, NavLink } from "react-router-dom";
import { fire } from "../../firebase";
function AdminNav(props) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" component={Link} to={"adminhome"}>
          Home
        </Button>
        <Button color="inherit" component={Link} to={"adminreceivedorders"}>
          Received
        </Button>
        <Button color="inherit" component={Link} to={"admincompletedorders"}>
          Completed
        </Button>
        <Button
          component={NavLink}
          to={"/"}
          onClick={() => {
            fire.auth().signOut();
            window.location.reload();
            props.setAdmin(null);
          }}
        >
          log Out
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default AdminNav;
