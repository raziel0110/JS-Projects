import React, { Component } from "react";
import Folders from "./Folders";
import Note from "./Note";
import "./App.css";

export default class App extends Component {
  state = { notes: [], folderList: [] };

  newFolder = name => {
    const { folderList } = this.state;
    folderList.push({ folderName: name, isSelected: false });
    this.setState({
      folderList: folderList
    });
  };

  saveNote = note => {
    const { notes } = this.state;
    notes.push(note);
    this.setState({ notes: notes });
  };

  render() {
    return (
      <div>
        <div className="body-app">
          <div className="header">
            <h5>Notes</h5>
          </div>
          <div className="components">
            <Folders
              notes={this.state.notes}
              newFolder={this.newFolder}
              folderList={this.state.folderList}
            />
            <Note note={this.saveNote} />
          </div>
        </div>
      </div>
    );
  }
}
