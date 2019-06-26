import React from "react";
import FolderList from "./FolderList";
import Modal from "./Modal";
import InputFolder from "./InputFolder";
import "./Folders.css";
import { cloneDeep } from "lodash";

export default class Folders extends React.Component {
  constructor(props) {
    super(props);
    this.found = 0;
  }
  state = {
    showModal: false,
    search: "",
    found: 0,
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

  //deep copy of folders then filter notes
  //parametrul search depinde methoda pentru a seta state-ul
  //folosin Lodash pentru a face o clona la obiect, Object.assign face o copie doar de suprafata nu deep,referinta ramane aceeaiasi

  searchNotes = search => {
    const filtered = this.props.folderList
      .map(folder => {
        const newFolder = cloneDeep(folder);
        newFolder.folder.notes = newFolder.folder.notes.filter(note => {
          return (
            note.noteTitle.toLowerCase().indexOf(search.toLowerCase()) !== -1
          );
        });
        return newFolder;
      })
      .filter(folder => {
        return folder.folder.notes.length > 0;
      });
    return filtered;
  };

  searchItemsFound = () => {
    let founds = 0;
    this.state.filtered.forEach(folder => {
      return (founds += folder.folder.notes.length);
    });
    return founds;
  };

  handleSearch = e => {
    e.preventDefault();
    const searchValue = e.target.value;
    const num = this.searchItemsFound();
    const filtered = this.searchNotes(searchValue);

    this.setState({
      search: searchValue,
      filtered: filtered,
      found: num
    });
  };

  render() {
    const modal = this.state.showModal && (
      <Modal show={this.state.showModal}>
        <InputFolder hideModal={this.hideModal} id={this.props.id} />
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
            {`Notes found: ${this.state.found}`}
          </div>
        </div>

        <FolderList
          search={this.state.search}
          folders={
            this.state.search !== ""
              ? this.state.filtered
              : this.props.folderList
          }
          selectFolder={this.selectFolderhandler}
          onUpdate={this.props.onUpdate}
          onDelete={this.props.onDelete}
        />
        {modal}
      </div>
    );
  }
}
