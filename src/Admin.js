import React from 'react';
import { fire } from './firebase';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Admin() {
  return (
    <div>
      <AppBar position='static'>
        <Toolbar>
          <Button color='inherit' component={Link} to={'/adminuserorders'}>
            NewOrders
          </Button>
          <Button color='inherit' component={Link} to={'/admincompletedorders'}>
            CompletedOrders
          </Button>
        </Toolbar>
      </AppBar>
      {/* <h1>You are logged in as an Admin</h1>
      <NewOrders />
      <CompletedOrders /> */}
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
