import React from "react";
import "./InputFolder.css";

class InputFolder extends React.Component {
  constructor(props) {
    super(props);
    this.id = 0;
  }
  state = { userInput: "", folderId: 0 };
  changeInputHandler = e => {
    this.setState({
      userInput: e.target.value
    });
  };

  submitHandler = e => {
    e.preventDefault();
    this.setState({ folderId: this.state.folderId + 1 });
    console.log(this.state.folderId);
    this.props.onAdd({
      folderId: this.state.folderId,
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
