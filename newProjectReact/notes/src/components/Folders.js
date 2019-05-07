import React from "react";
import FolderList from "./FolderList";
import Modal from "./Modal";
import InputFolder from "./InputFolder";
import "./Folders.css";

export default class Folders extends React.Component {
  state = {
    folderList: [],
    showModal: false
  };

  newFolder = name => {
    const { folderList } = this.state;
    folderList.push(name);
    this.setState({
      folderList: folderList
    });
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
        <InputFolder onAdd={this.newFolder} hideModal={this.hideModal} />
      </Modal>
    );

    return (
      <div className="container">
        <div className="new-folder">
          <button type="button" onClick={this.showModal}>
            New Folder
          </button>
        </div>
        <FolderList folders={this.state.folderList} />
        {modal}
      </div>
    );
  }
}
