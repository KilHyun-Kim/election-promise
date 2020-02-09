import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Basic from "./components/Basic";
import Busan from "./components/Busan";

export default () => (
  <Router>
    <Route exact path="/" component={Basic} />
    <Route exact path="/busan" component={Busan} />
  </Router>
);
