import React from "react";
import "./UpdateBox.css";

export default class UpdateBox extends React.Component {
  state = { textnote: this.props.note.note };

  updateValue = e => {
    this.setState({ textnote: e.target.value });
  };

  updateHandler = e => {
    e.preventDefault();
    console.log(this.state.textnote);
    this.props.onUpdate(this.state.textnote);
    this.props.hideInfo();
  };
  render() {
    return (
      <div className="update-modal">
        <div className="update-window">
          <h4 className="update-header">Text input:</h4>
          <form onSubmit={this.updateHandler} className="update-form">
            <textarea
              type="text"
              value={this.state.textnote}
              className="update-textarea"
              onChange={this.updateValue}
            />
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.props.hideInfo}
            >
              Update
            </button>
          </form>
        </div>
      </div>
    );
  }
}
