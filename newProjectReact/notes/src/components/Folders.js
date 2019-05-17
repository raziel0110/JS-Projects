import React from "react";
import FolderList from "./FolderList";
import Modal from "./Modal";
import InputFolder from "./InputFolder";
import "./Folders.css";
import { cloneDeep } from "lodash";

export default class Folders extends React.Component {
  state = {
    showModal: false,
    search: "",
    found: 0,
    folders: []
  };

  showModal = () => {
    this.setState({
      showModal: true
    });
  };

  hideModal = () => {
    this.setState({
      showModal: false
    });
  };

  componentDidMount() {
    this.findNotes();
  }

  componentDidUpdate() {
    const elements = this.searchNotes();
    console.log(elements);
  }

  findNotes = () => {
    const { folderList } = this.props;
    if (folderList !== this.state.folders) {
      this.setState({ folders: folderList });
    }
  };

  duplicateFolder = folder => {
    cloneDeep(folder);
  };
  // trebuie facuta o copie la foldere dupa care fiecare folder sa aiba doar notes care
  // satisfac conditia

  searchNotes = () => {
    return this.state.folders.map(folder => {
      return this.duplicateFolder(folder);
    });
    // .filter(folder => {
    //   const { notes } = folder.folder;
    //   return notes.filter(note => {
    //     return note.noteTitle === this.state.search;
    //   });
    // });
  };

  handleSearch = e => {
    e.preventDefault();
    this.setState({ search: e.target.value });
  };

  render() {
    const els = this.searchNotes();
    console.log(els);
    const modal = this.state.showModal && (
      <Modal show={this.state.showModal}>
        <InputFolder
          onAdd={this.props.newFolder}
          hideModal={this.hideModal}
          id={this.props.id}
        />
      </Modal>
    );

    return (
      <div className="container">
        <div className="top-container">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="fa fa-search glass" />
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="addon-wrapping"
              value={this.state.search}
              onChange={this.handleSearch}
            />

            <button
              type="button"
              onClick={this.showModal}
              className="btn btn-warning"
            >
              New
            </button>
          </div>
          <div className="found-items">
            {this.state.search.length < 1
              ? `Notes found: 0`
              : `Notes found: ${this.state.found}`}
          </div>
        </div>

        <FolderList
          //found={this.showNum}
          search={this.state.search}
          //folders={this.props.folderList}
          folders={this.state.folders}
          //notes={this.props.notes}
          selectFolder={this.selectFolderhandler}
          onUpdate={this.props.onUpdate}
        />
        {modal}
      </div>
    );
  }
}
