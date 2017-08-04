// src/routes.js
import React from "react";
import { HashRouter } from "react-router-dom";

import Initial from "./Initial";
import About from "./About";

const Routes = props => (
  <HashRouter>
    <main>
      <Switch>
        <Route exact path="/" component={Initial} />
        <Route path="/about" component={About} />
      </Switch>
    </main>
  </HashRouter>
);

export default Routes;
