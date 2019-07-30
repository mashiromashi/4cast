import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import About from "../Pages/About/About";
import Dashboard from "../Pages/Dashboard/Dashboard";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/about" component={About} />
      </Switch>
    );
  }
}

export default Content;
