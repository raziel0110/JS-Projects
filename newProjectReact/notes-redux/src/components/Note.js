import React from "react";
import "./Note.css";
import { connect } from "react-redux";

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.id = 0;
  }
  state = {
    note: {},
    titleError: "",
    noteError: ""
  };

  saveNote = e => {
    e.preventDefault();
    const isValid = this.validateNote();

    if (isValid) {
      // this.setState({ noteId: this.state.noteId + 1 });
      const note = {
        id: this.props.noteId,
        note: this.props.noteText,
        noteTitle: this.props.noteTitle,
        date: new Date().toLocaleString(),
        isSelect: false
      };

      this.props.note(note);
      // this.id++;
      this.setState({
        noteError: "",
        titleError: ""
      });
    }
  };

  validateNote = () => {
    let titleError;
    let noteError;

    if (this.props.noteTitle.length <= 0) {
      titleError = "Please add a title";
    }
    if (titleError) {
      this.setState({ titleError });
      return false;
    }

    if (this.props.noteText.length <= 0) {
      noteError = "Please fill the text area with some note!";
    }
    if (noteError) {
      this.setState({ noteError });
      return false;
    }
    return true;
  };
  render() {
    console.log(this.props);
    return (
      <div className="note">
        <div className="note-header">
          <h4>Text Area</h4>
        </div>
        <div className="note-input">
          <form onSubmit={this.saveNote}>
            <div className="error-message">{this.state.titleError}</div>
            <input
              type="text"
              onChange={this.props.titleHandler}
              value={this.props.noteTitle}
              className="add-title"
              placeholder="Please enter a title"
            />

            <div className="error-message">{this.state.noteError}</div>
            <textarea
              value={this.props.noteText}
              onChange={this.props.textareaChangeHandler}
              placeholder="Enter Text"
            />
            <button
              type="button"
              className={!this.props.noteTitle ? "disabled" : "add-note"}
              onClick={this.props.saveNote}
              disabled={!this.props.noteTitle}
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

const mapStateToProps = state => {
  console.log(state);
  return {
    noteText: state.inputNote.noteText,
    noteTitle: state.inputNote.noteTitle,
    noteId: state.inputNote.noteId,
    date: state.inputNote.date,
    isSelect: state.inputNote.isSelect
  };
};

const mapDispatchToProps = dispatch => {
  return {
    textareaChangeHandler: e => {
      const action = {
        type: "INPUT_NOTE",
        text: e.target.value
      };
      dispatch(action);
    },
    titleHandler: e => {
      const action = {
        type: "INPUT_TITLE",
        text: e.target.value
      };
      dispatch(action);
    },
    saveNote: () => {
      const action = {
        type: "SAVE_NOTE"
      };
      dispatch(action);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Note);
