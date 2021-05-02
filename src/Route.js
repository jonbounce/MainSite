import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
//import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import Checkin from "./containers/Checkin";
import Register from "./containers/Register";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/Login">
  <Login />
       </Route>

<Route exact path="/Checkin">
        <Checkin />
      </Route>

<Route exact path="/Register">
  <Register />
</Route>
    </Switch>
  );
}


