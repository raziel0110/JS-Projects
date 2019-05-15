import React from "react";
import "./InputFolder.css";

class InputFolder extends React.Component {
  state = { userInput: "", folderId: 0 };
  changeInputHandler = e => {
    const value = e.target.value.toUpperCase();
    this.setState({
      userInput: value
    });
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.onAdd({
      folderId: this.props.id,
      folderName: this.state.userInput,
      notes: [],
      isSelected: false
    });
    this.props.hideModal();
  };
  render() {
    return (
      <div className="container-input">
        <div className="window">
          <h4>Create new folder</h4>
          <form onSubmit={this.submitHandler}>
            <input
              type="text"
              value={this.state.userInput}
              onChange={this.changeInputHandler}
            />
            <button type="button" onClick={this.submitHandler}>
              Create Folder
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default InputFolder;
