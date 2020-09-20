import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import UserOrders from './components/customerComp/UserOrders';
import CompletedUserOrders from './components/customerComp/CompletedUserOrders';
import NewOrders from './components/adminComp/NewOrders';
import CompletedOrders from './components/adminComp/CompletedOrders';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <React.StrictMode>
        <Route exact path='/' component={App} />
        <Route exact path='/userorders' component={UserOrders} />
        <Route exact path='/completedorders' component={CompletedUserOrders} />
        <Route exact path='/adminuserorders' component={NewOrders} />
        <Route exact path='/admincompletedorders' component={CompletedOrders} />
      </React.StrictMode>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
