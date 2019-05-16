import React from "react";
import FolderList from "./FolderList";
import Modal from "./Modal";
import InputFolder from "./InputFolder";
import "./Folders.css";

export default class Folders extends React.Component {
  constructor(props) {
    super(props);
    this.found = 0;
  }
  state = {
    showModal: false,
    search: "",
    found: 0
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

  showNum = items => {
    const num = items;
    console.log("[Folders]-> notes found:", num);
    console.log("[Folders]-> this.found:", this.found);
    this.found = num;
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
              <button className="input-group-text">
                <i className="fa fa-search glass" />
              </button>
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
              : `Notes found: ${this.found}`}
          </div>
        </div>

        <FolderList
          found={this.showNum}
          search={this.state.search}
          folders={this.props.folderList}
          notes={this.props.notes}
          selectFolder={this.selectFolderhandler}
          onUpdate={this.props.onUpdate}
        />
        {modal}
      </div>
    );
  }
}
