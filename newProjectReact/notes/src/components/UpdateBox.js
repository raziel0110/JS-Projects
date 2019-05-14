import React from "react";
import "./UpdateBox.css";

export default class UpdateBox extends React.Component {
  constructor(props) {
    super(props);
    this.isdiff = false;
  }
  state = {
    textnote: this.props.note.note
  };
  updateValue = e => {
    this.setState({ textnote: e.target.value });
    if (this.props.note.note !== e.target.value) {
      this.isdiff = true;
    }
  };

  updateHandler = e => {
    e.preventDefault();
    console.log(this.state.textnote);
    const value = this.state;

    this.props.update(value);
    // console.log(value);
    this.props.hideInfo();
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
