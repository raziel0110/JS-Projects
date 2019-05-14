import React from "react";
import "./Note.css";

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.id = 0;
  }
  state = { noteId: 0, noteText: "", noteTitle: "" };

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
    this.setState({ noteId: this.state.noteId + 1 });

    this.props.note({
      id: this.id,
      note: this.state.noteText,
      noteTitle: this.state.noteTitle,
      isSelect: false
    });
    this.id++;
    this.setState({ noteText: "", noteTitle: "" });
  };
  render() {
    return (
      <div className="note">
        <div className="note-header">
          <h4>Text Area</h4>
        </div>
        <div className="note-input">
          <form>
            <input
              type="text"
              onChange={this.titleHandler}
              value={this.state.noteTitle}
              className="add-title"
              placeholder="Please enter a title"
            />
            <textarea
              value={this.state.noteText}
              onChange={this.textareaChangeHandler}
              placeholder="Enter Text"
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
