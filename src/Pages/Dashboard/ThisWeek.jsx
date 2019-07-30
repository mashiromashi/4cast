import React, { Component } from "react";
import moment from "moment";

function getTenDayDates() {
  let dateArray = [];
  for (let i = 0; i < 7; i++) {
    let date = moment(new Date())
      .add(i, "days")
      .format("DD MMM YYYY");

    dateArray.push(date);
  }
  return dateArray;
}

class ThisWeek extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TenDayArray: getTenDayDates()
    };
  }

  render() {
    return (
      <div>
        <ul className="row">
          {this.state.TenDayArray.map(days => {
            return <li className="col s1">{days.toString()}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default ThisWeek;
