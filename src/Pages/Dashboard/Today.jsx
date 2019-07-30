import React, { Component } from "react";
import moment from "moment";

const dateTime = moment(new Date()).format("DD MMM YYYY");

class Today extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTemp_c: "",
      currentTemp_f: "",
      currentIs_day: "",
      currentCloud: "",
      currentFeelsLike_c: "",
      currentFeelsLike_f: "",
      currentHumidity: "",
      currentWind_mph: "",
      currentWind_kph: "",
      currentWind_degree: "",
      currentwind_dir: "",
      currentUv: "",
      currentGust_mph: "",
      currentGust_kph: "",

      conditionText: "",

      lastUpdated: ""
    };
    this.getTodayWeather = this.getTodayWeather.bind(this);
  }
  getTodayWeather = () => {
    fetch(
      `https://api.apixu.com/v1/current.json?key=258fa23a6cd5407c90562915192907&q=San Mateo,Rizal`
    )
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(data => {
        let current = data.current;

        this.setState({
          lastUpdated: current.last_updated,
          currentTemp_c: current.temp_c,
          currentTemp_f: current.temp_f,
          currentIs_day: current.is_day,
          currentCloud: current.cloud,
          currentFeelsLike_c: current.feelslike_c,
          currentFeelsLike_f: current.feelslike_f,
          currentHumidity: current.humidity,
          currentWind_mph: current.wind_mph,
          currentWind_kph: current.wind_kph,
          currentWind_degree: current.wind_degree,
          currentWind_dir: current.wind_dir,
          currentUv: current.uv,
          currentGust_mph: current.gust_mph,
          currentGust_kph: current.gust_kph,
          conditionText: current.condition.text,
          icon: current.condition.icon
        });
      });
  };

  componentDidMount() {
    this.getTodayWeather();
  }
  render() {
    const {
      currentTemp_c,
      currentTemp_f,
      currentIs_day,
      currentCloud,
      currentFeelsLike_c,
      currentFeelsLike_f,
      currentHumidity,
      currentWind_mph,
      currentWind_kph,
      currentWind_degree,
      currentwind_dir,
      currentUv,
      currentGust_mph,
      currentGust_kph,
      conditionText,
      icon
    } = this.state;
    return (
      <div className="row">
        <div className="col s1">
          <p>{conditionText}</p>
          <h1>{currentTemp_c}°C</h1>
          <p>{currentFeelsLike_c}°C</p>
        </div>
        <div className="col s1 offset-s6" style={{ paddingTop: "50px" }}>
          <img
            className="col s12 offset-s6"
            src={`https:${icon}`}
            alt=""
            style={{ width: "75px", marginLeft: "50px" }}
          />
        </div>
      </div>
    );
  }
}

export default Today;
