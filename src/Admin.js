import React from 'react';
import { fire } from './firebase';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import NewOrders from './components/adminComp/NewOrders';
import CompletedOrders from './components/adminComp/CompletedOrders';
import ReceivedOrders from './components/adminComp/ReceivedOrders';
function Admin() {
  return (
    <BrowserRouter>
      <div>
        <AppBar position='static'>
          <Toolbar>
            <Button color='inherit' component={NavLink} to={'adminhome'}>
              Home
            </Button>
            <Button color='inherit' component={NavLink} to={'receivedorders'}>
              Received
            </Button>
            <Button color='inherit' component={NavLink} to={'completedorders'}>
              Completed
            </Button>
            <Button
              component={NavLink}
              to={'/'}
              onClick={() => {
                fire.auth().signOut();
                window.location.reload();
              }}
            >
              log Out
            </Button>
          </Toolbar>
        </AppBar>

        <Switch>
          <React.StrictMode>
            <Route exact path='/' component={NewOrders} />
            <Route exact path='/receivedorders' component={ReceivedOrders} />
            <Route exact path='/completedorders' component={CompletedOrders} />
          </React.StrictMode>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default Admin;
