import React, { Component } from "react";
import "./Dashboard.css";
import Today from "./Today";
import Tomorrow from "./Tomorrow";
import ThisWeek from "./ThisWeek";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      weatherInfo: []
    };
    this._handleSearchChange = this._handleSearchChange.bind(this);
    this.getWeatherInfo = this.getWeatherInfo.bind(this);
  }

  getWeatherInfo() {
    fetch(
      `https://api.apixu.com/v1/current.json?key=258fa23a6cd5407c90562915192907&q=San Mateo,Rizal
      }`,
      {
        method: "GET"
      }
    )
      .then(res => {
        if (res.ok) {
          console.log(res);

          return res.json();
        }
      })
      .then(data => {
        console.log(data);

        let weatherArray = [];
        for (let i = 0; i < data.length; i++) {
          weatherArray.push(data[i]);
        }
      });
  }
  // componentDidMount() {
  //   this.getWeatherInfo();
  // }

  _handleSearchChange(event) {
    this.setState({ search: event.target.value });
  }
  _handleOnKeyPress = e => {
    if (e.key === "Enter") {
      this.getWeatherInfo();
      console.log("getweatehrinfo");
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <form>
            <div className="input-field">
              <input
                type="Text"
                id="search"
                placeholder="Search"
                required
                className="col s6 offset-s6 right-align"
                value={this.state.search}
                onChange={this._handleSearchChange}
                onKeyPress={this._handleOnKeyPress}
              />
            </div>
          </form>
        </div>
        <div className="row">
          <div className="col s12 ">
            <ul className="tabs">
              <li className="tab col s4 active">
                <a href="#today" className="indigo-text text-darken-4">
                  Today
                </a>
              </li>
              <li className="tab col s4">
                <a href="#tomorrow" className="indigo-text text-darken-4">
                  Tomorrow
                </a>
              </li>
              <li className="tab col s4">
                <a href="#10days" className="indigo-text text-darken-4">
                  This Week
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <section id="today">
            <Today />
          </section>
        </div>
        <div>
          <section id="tomorrow">
            <Tomorrow />
          </section>
        </div>
        <div>
          <section id="10days">
            <ThisWeek />
          </section>
        </div>
      </div>
    );
  }
}

export default Dashboard;
