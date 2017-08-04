import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Initial Page</h2>
        </div>
        <ul>
          <li><Link to="/about">About</Link></li>
        </ul>
        <p className="App-intro">
          This is the Initial Page.
        </p>
      </div>
    );
  }
}

export default App;
