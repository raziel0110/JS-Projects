import React from "react";
import FolderList from "./FolderList";
import Modal from "./Modal";
import InputFolder from "./InputFolder";
import "./Folders.css";
import { cloneDeep } from "lodash";

export default class Folders extends React.Component {
  constructor(props) {
    super(props);
    this.filtered_notes = [];
  }
  state = {
    showModal: false,
    search: "",
    found: 0,
    folders: this.props.folderList,
    filtered: []
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

  // componentDidMount() {
  //   const filtered = this.searchNotes();
  //   this.setState({ filtered });
  // }

  componentDidUpdate(prevState) {
    const filtered = this.searchNotes();
    // if (prevState.filtered !== filtered) {
    //   this.setState({ filtered });
    // }

    console.log(filtered);
  }

  //deep copy of folders then filter notes
  searchNotes = () => {
    const filtered = this.state.folders
      .map(folder => {
        const newFolder = cloneDeep(folder);
        newFolder.folder.notes = newFolder.folder.notes.filter(note => {
          return (
            note.noteTitle
              .toLowerCase()
              .indexOf(this.state.search.toLowerCase()) !== -1
          );
        });
        return newFolder;
      })
      .filter(folder => {
        return folder.folder.notes.length > 0;
      });
    return filtered;
  };

  handleSearch = e => {
    e.preventDefault();
    this.setState({ search: e.target.value });
  };

  render() {
    console.log(this.filtered_notes);
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
