import React from "react";
import "./InputFolder.css";
import { connect } from "react-redux";

class InputFolder extends React.Component {
  saveFolder = () => {
    this.props.addFolder();
    this.props.hideModal();
  };
  render() {
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

          <form onSubmit={() => this.props.hideModal()}>
            <input
              type="text"
              value={this.props.folderName}
              onChange={this.props.changeInputHandler}
            />
            <button
              type="button"
              className="add-folder"
              onClick={() => this.saveFolder()}
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
  return {
    folderName: state.folders.folderName
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
    },
    addFolder: e => {
      dispatch({ type: "ADD_FOLDER" });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputFolder);
