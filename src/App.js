import React, { Component } from "react";
import "./App.css";
import M from "materialize-css";
import { BrowserRouter } from "react-router-dom";
import Content from "./Route/Content";
import NavBar from "./Components/NavBar";

class App extends Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    return (
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <Content />
      </BrowserRouter>
    );
  }
}

export default App;
