import React from "react";
import "./Note.css";

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.id = 0;
  }
  state = {
    noteId: 0,
    noteText: "",
    noteTitle: "",
    date: "",
    titleError: "",
    noteError: ""
  };

  titleHandler = e => {
    this.setState({ noteTitle: e.target.value });
  };

  textareaChangeHandler = e => {
    this.setState({
      noteText: e.target.value
    });
  };

  saveNote = e => {
    e.preventDefault();
    const isValid = this.validateNote();
    if (isValid) {
      this.setState({ noteId: this.state.noteId + 1 });
      this.props.note({
        id: this.id,
        note: this.state.noteText,
        noteTitle: this.state.noteTitle,
        date: new Date().toLocaleString(),
        isSelect: false
      });
      this.id++;
      this.setState({
        noteText: "",
        noteTitle: "",
        noteError: "",
        titleError: ""
      });
    }
  };

  validateNote = () => {
    let titleError;
    let noteError;

    if (this.state.noteTitle.length <= 0) {
      titleError = "Please add a title";
    }
    if (titleError) {
      this.setState({ titleError });
      return false;
    }

    if (this.state.noteText.length <= 0) {
      noteError = "Please fill the text area with some note!";
    }
    if (noteError) {
      this.setState({ noteError });
      return false;
    }

    return true;
  };
  render() {
    return (
      <div className="note">
        <div className="note-header">
          <h4>Text Area</h4>
        </div>
        <div className="note-input">
          <form>
            <div className="error-message">{this.state.titleError}</div>
            <input
              type="text"
              onChange={this.titleHandler}
              value={this.state.noteTitle}
              className="add-title"
              placeholder="Please enter a title"
            />
            <div className="error-message">{this.state.noteError}</div>
            <textarea
              value={this.state.noteText}
              onChange={this.textareaChangeHandler}
              placeholder="Enter Text"
            />
            <button
              type="button"
              className={!this.state.noteTitle ? "disabled" : "add-note"}
              onClick={this.saveNote}
              disabled={!this.state.noteTitle}
            >
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
