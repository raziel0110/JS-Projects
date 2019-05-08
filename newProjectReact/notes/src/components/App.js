import React, { Component } from "react";
import Folders from "./Folders";
import Note from "./Note";
import "./App.css";

export default class App extends Component {
  state = { notes: "", folderList: [] };

  newFolder = name => {
    const { folderList } = this.state;
    folderList.push({ folder: name });
    this.setState({
      folderList: folderList
    });
  };

  saveNote = note => {
    const { folderList, notes } = this.state;
    const dir = this.state.folderList.find(f => {
      return f.folder.isSelected === true;
    });

    dir.folder.notes.push(note);
    this.setState({ dir });
    // const { notes } = this.state;
    // console.log(notes);
    // // notes.push(note);
    // // this.setState({ notes });
    // // console.log(this.state.notes);
  };

  selectFolder = folder => {
    const index = this.state.folderList.findIndex(
      f => f.folder.folderId === folder.folderId
    );

    const dir = { ...this.state.folderList[index] };
    const isSelect = this.state.folderList[index].folder.isSelected;
    folder.isSelected = !isSelect;

    const folderList = { ...this.state.folderList };
    folderList[index] = dir;

    // this.setState({ folderList: folderList });
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
              selectFolder={this.selectFolder}
            />
            <Note note={this.saveNote} />
          </div>
        </div>
      </div>
    );
  }
}
