import React, { Component } from "react";
import Folders from "./Folders";
import Note from "./Note";
import MessagePopUp from "./MessagePopUp";
import Modal from "./Modal";

import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.modal = "";
    this.id = 0;
  }
  state = {
    //note_value: "",
    folderList: [],
    showMessage: false,
    error: ""
  };

  showModal = () => {
    this.setState({ showMessage: true });
  };

  hideModal = () => {
    this.setState({ showMessage: false });
  };

  newFolder = name => {
    const { folderList } = this.state;
    folderList.push({ folder: name });
    this.setState({
      folderList: folderList
    });
    this.id++;
  };

  updateNote = note => {
    console.log("app :", note);
    const { folderList } = this.state;

    folderList.forEach(f => {
      if (f.folder.isSelected === true) {
        const { notes } = f.folder;
        console.log(notes);
        const element = notes.find(item => item.id === note.id);
        this.setState(element);
      }
    });
  };

  saveNote = note => {
    const dir = this.state.folderList.find(f => {
      return f.folder.isSelected === true;
    });
    if (dir) {
      dir.folder.notes.push(note);
    } else {
      this.setState({ showMessage: true, error: "Please select a folder!" });
    }

    this.setState({ dir });
  };

  render() {
    const modal = this.state.showMessage && (
      <Modal showModal={this.showModal}>
        <MessagePopUp hideModal={this.hideModal} message={this.state.error} />
      </Modal>
    );

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
              id={this.id}
              onUpdate={this.updateNote}
            />
            <Note note={this.saveNote} modal={this.modal} />
            {modal}
          </div>
        </div>
      </div>
    );
  }
}
