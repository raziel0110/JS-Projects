import React from "react";
import FolderList from "./FolderList";
import Modal from "./Modal";
import InputFolder from "./InputFolder";
import "./Folders.css";

export default class Folders extends React.Component {
  state = {
    showModal: false
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
            />
            <div className="new-folder">
              <button
                type="button"
                onClick={this.showModal}
                className="btn btn-warning"
              >
                New
              </button>
            </div>
          </div>
        </div>

        <FolderList
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
