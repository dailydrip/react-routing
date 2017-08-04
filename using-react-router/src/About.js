//@flow
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";

class About extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>About Page</h2>
        </div>
        <ul>
          <li><Link to="/">Go Back</Link></li>
        </ul>
        <p className="App-intro">
          This is the About Page
        </p>
      </div>
    );
  }
}

export default About;
