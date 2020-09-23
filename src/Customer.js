import React from 'react';
import { fire } from './firebase';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom';
import UserOrders from './components/customerComp/UserOrders';
import CompletedUserOrders from './components/customerComp/CompletedUserOrders';
import Book from './components/customerComp/Book';
function Customer(props) {
  return (
    <BrowserRouter>
      <div>
        <AppBar position='static'>
          <Toolbar>
            <Button color='inherit' component={Link} to={'/userorders'}>
              UserOrders
            </Button>
            <Button color='inherit' component={Link} to={'/completedorders'}>
              CompletedOrders
            </Button>
            <Button
              component={Link}
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
            <Route exact path='/' component={Book} />
            <Route
              exact
              path='/userorders'
              render={() => {
                return <UserOrders user={props.user} />;
              }}
            />
            <Route
              exact
              path='/completedorders'
              render={() => {
                return <CompletedUserOrders user={props.user} />;
              }}
            />
          </React.StrictMode>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default Customer;
