import React, { Component } from "react";
import Folders from "./Folders";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="body-app">
          <div className="header">
            <h5>Notes</h5>
          </div>
          <div className="components">
            <Folders />
          </div>
        </div>
      </div>
    );
  }
}
