// @flow
import React from "react";
import Initial from "./Initial";
import About from "./About";
import { Switch, Route } from "react-router-dom";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Initial} />
      <Route path="/about" component={About} />
    </Switch>
  </main>
);

export default Main;
