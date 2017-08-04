import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import routie from "./routie.js";

routie({
  "": function() {
    console.log("Initial");
  },
  about: function() {
    console.log("About");
  }
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <a href="#">Initial</a>
        <a href="#about">About</a>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
