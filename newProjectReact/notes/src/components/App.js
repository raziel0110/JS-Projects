import React, { Component } from "react";
import Folders from "./Folders";
import Note from "./Note";
import "./App.css";

export default class App extends Component {
  state = { note: "" };

  saveNote = note => {
    this.setState({ note: note });
  };

  render() {
    console.log(this.state.note);
    return (
      <div>
        <div className="body-app">
          <div className="header">
            <h5>Notes</h5>
          </div>
          <div className="components">
            <Folders note={this.state.note} />
            <Note note={this.saveNote} />
          </div>
        </div>
      </div>
    );
  }
}
