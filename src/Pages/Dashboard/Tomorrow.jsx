import React, { Component } from "react";
import moment from "moment";

let dateTimeTomrorow = moment(new Date())
  .add(1, "days")
  .format("DD MMM YYYY");

class Tomorrow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div>{dateTimeTomrorow}</div>;
  }
}

export default Tomorrow;
