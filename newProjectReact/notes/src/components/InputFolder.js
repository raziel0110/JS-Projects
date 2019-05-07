import React from "react";
import "./InputFolder.css";

class InputFolder extends React.Component {
  state = { userInput: "" };
  changeInputHandler = e => {
    this.setState({
      userInput: e.target.value
    });
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.onAdd({
      folderId: this.state.userInput,
      folderName: this.state.userInput,
      notes: []
    });
    this.props.hideModal();
  };
  render() {
    return (
      <div className="container-input">
        <div className="window">
          <h4>Create new folder</h4>
          <form>
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
