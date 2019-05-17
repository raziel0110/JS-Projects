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
    this.searchNotes();
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
    const filtered = this.state.folders
      .filter(folder => {
        return folder.folder.notes.some(note => {
          return (
            note.noteTitle
              .toLowerCase()
              .indexOf(this.state.search.toLowerCase()) !== -1
          );
        });
      })
      .map(folder => {
        return Object.assign({}, folder, {
          notes: folder.folder.notes.filter(note => {
            return (
              note.noteTitle
                .toLowerCase()
                .indexOf(this.state.search.toLowerCase()) !== -1
            );
          })
        });
      });
    console.log(filtered);
  };

  handleSearch = e => {
    e.preventDefault();
    this.setState({ search: e.target.value });
  };

  render() {
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
