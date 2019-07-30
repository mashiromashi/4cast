import React, { Component } from "react";

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <img
            src="/img/4castLogo.jpg"
            alt=""
            className="brand-logo center responsive-img right circle"
            style={{
              height: "100%"
            }}
          />
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
