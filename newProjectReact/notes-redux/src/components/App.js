import React, { Component } from "react";
import Folders from "./Folders";
import Note from "./Note";
import MessagePopUp from "./MessagePopUp";
import Modal from "./Modal";
import { connect } from "react-redux";
import { cloneDeep } from "lodash";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.modal = "";
    this.id = 0;
  }
  state = {
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
    const { folderList } = this.state;
    folderList.forEach(f => {
      if (f.folder.isSelected === true) {
        const { notes } = f.folder;
        const element = notes.find(item => item.id === note.id);
        this.setState(element);
      }
    });
  };

  deleteNote = note => {
    const { folderList } = this.state;
    const dir = folderList.map(f => {
      const newFolders = cloneDeep(f);
      newFolders.folder.notes = newFolders.folder.notes.filter(n => {
        return n.id !== note.id;
      });
      return newFolders;
    });
    this.setState({ folderList: dir });
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
              onDelete={this.deleteNote}
            />
            <Note note={this.saveNote} modal={this.modal} />
            {modal}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    saveNote: e => {
      const action = {
        type: "SAVE_NOTE"
      };
      dispatch(action);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
