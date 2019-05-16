import React from "react";
import "./UpdateBox.css";

export default class UpdateBox extends React.Component {
  constructor(props) {
    super(props);
    this.isdiff = false;
    this.initialstate = this.props.note.note;
  }
  state = {
    textnote: this.props.note.note,
    errorMessage: ""
  };
  updateValue = e => {
    this.setState({ textnote: e.target.value });
    if (this.props.note.note !== e.target.value) {
      this.isdiff = true;
    }
  };
  validate_update = () => {
    let messageError;
    if (this.state.textnote.length <= 0) {
      messageError = "Note can not be empty";
    }
    if (messageError) {
      this.setState({ errorMessage: messageError });
      return false;
    }
    return true;
  };

  updateHandler = e => {
    e.preventDefault();
    const isValid = this.validate_update();
    console.log(this.state.textnote);
    const value = this.state;
    if (isValid) {
      this.props.update(value);
      this.props.hideInfo();
    }
  };
  render() {
    return (
      <div className="update-modal">
        <div className="update-window">
          <h4 className="update-header">Text input:</h4>

          <form className="update-form">
            <input
              type="text"
              value={this.props.note.noteTitle}
              disabled
              className="update-title"
            />
            <div className="error-message">{this.state.errorMessage}</div>
            <textarea
              type="text"
              value={this.state.textnote}
              className="update-textarea"
              onChange={this.updateValue}
            />
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.updateHandler}
            >
              {this.isdiff ? "Update" : "Close"}
            </button>
          </form>
        </div>
      </div>
    );
  }
}
