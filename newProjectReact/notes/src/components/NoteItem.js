import React from "react";
import "./NoteItem.css";

class NoteItem extends React.Component {
  state = { activeItem: false };

  isNoteItem = () => {
    const active = this.state.activeItem;
    this.setState({ activeItem: !active });
  };

  render() {
    return (
      <div className="folder-list-items">
        <li
          className={this.state.activeItem ? "activeItem" : null}
          onClick={() => {
            this.props.showNoteItem(this.props.note);
          }}
        >
          {this.props.note.noteTitle}
        </li>
      </div>
    );
  }
}

export default NoteItem;
