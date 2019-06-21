import React from "react";
import "./InputFolder.css";
import { connect } from "react-redux";

class InputFolder extends React.Component {
  state = { folderId: 0 };
  submitHandler = e => {
    e.preventDefault();
    this.props.onAdd({
      folderId: this.props.id,
      folderName: this.props.userInput,
      notes: [],
      isSelected: false
    });
    this.props.hideModal();
  };
  render() {
    console.log(this.props);
    return (
      <div className="container-input">
        <div className="window">
          <button
            type="button"
            className="close-btn"
            onClick={() => this.props.hideModal()}
          >
            x
          </button>
          <h4>Create new folder</h4>

          <form onSubmit={this.submitHandler}>
            <input
              type="text"
              value={this.state.userInput}
              onChange={this.props.changeInputHandler}
            />
            <button
              type="button"
              className="add-folder"
              onClick={this.submitHandler}
            >
              Create Folder
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.inputFolder.userInput);
  return {
    userInput: state.inputFolder.userInput
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeInputHandler: e => {
      const action = {
        type: "INPUT_FOLDER",
        text: e.target.value.toUpperCase()
      };
      dispatch(action);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputFolder);
