import React from "react";
import "./Note.css";

class Note extends React.Component {
  state = { noteId: 0, noteText: "" };

  textareaChangeHandler = e => {
    this.setState({
      noteText: e.target.value
    });
  };

  saveNote = e => {
    e.preventDefault();
    this.setState({ noteId: this.state.noteId + 1 });
    this.props.note({ note: this.state.noteText });
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
          </form>
        </div>
      </div>
    );
  }
}

export default Note;
