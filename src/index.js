import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Switch, Route, BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <React.StrictMode>
        <Route exact path="/" component={App} />
      </React.StrictMode>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
