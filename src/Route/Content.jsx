import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Dashboard} />
      </Switch>
    );
  }
}

export default Content;
