import React, { Component } from "react";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="indigo">
        <div className="nav-wrapper">
          <ul className="left hide-on-med-and-down">
            <li>
              <a href="/about ">About</a>
            </li>
            <li />
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
