import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Basic from "./components/Basic";
import Busan from "./components/Busan";
import Gijanggun from "./components/Gijanggun";

export default () => (
  <Router>
    <Header />
    <Route exact path="/" component={Basic} />
    <Route exact path="/busan" component={Busan} />
    <Route exact path="/busan/gijanggun" component={Gijanggun} />
  </Router>
);
