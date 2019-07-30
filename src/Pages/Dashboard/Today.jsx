import React, { Component } from "react";
import moment from "moment";

let dateTime = moment(new Date()).format("DD MMM YYYY");

class Today extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div>{dateTime}</div>;
  }
}

export default Today;
