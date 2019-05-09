import React from "react";
import "./Note.css";

class Note extends React.Component {
  state = { noteId: 0, noteText: "", noteTitle: "" };

  textareaChangeHandler = e => {
    this.setState({
      noteText: e.target.value
    });
  };

  saveNote = e => {
    e.preventDefault();
    this.setState({ noteId: this.state.noteId + 1 });
    this.props.note({
      id: this.state.noteId,
      note: this.state.noteText,
      noteTitle: this.state.noteText.substr(0, 30)
    });
    this.setState({ noteText: "" });
  };
  render() {
    return (
      <div className="note">
        <div className="note-header">
          <h4>Text Area</h4>
        </div>
        <div className="note-input">
          <form>
            <textarea
              value={this.state.noteText}
              onChange={this.textareaChangeHandler}
            />
            <button type="button" className="add-note" onClick={this.saveNote}>
              Add Note
            </button>
            {this.props.modal}
          </form>
        </div>
      </div>
    );
  }
}

export default Note;
