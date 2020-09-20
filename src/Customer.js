import React from 'react';
import { fire } from './firebase';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
function Customer() {
  return (
    <div>
      <AppBar position='static'>
        <Toolbar>
          <Button color='inherit' component={Link} to={'/userorders'}>
            NewOrders
          </Button>
          <Button color='inherit' component={Link} to={'/completedorders'}>
            CompletedOrders
          </Button>
        </Toolbar>
      </AppBar>
      {/* <h1>You are logged in as customer</h1>
      <UserOrders />
      <CompletedUserOrders /> */}
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
