import React from "react";
import "./NoteItem.css";

class NoteItem extends React.Component {
  render() {
    console.log(this.props.note);

    return (
      <div>
        <div
          className="folder-list-items"
          onClick={() => this.props.showBody(this.props.note)}
        >
          <li
            className={this.props.isSelect ? "activeItem" : null}
            onClick={() => {
              this.props.showNoteItem(this.props.note);
            }}
          >
            {this.props.note.noteTitle}
          </li>
        </div>
      </div>
    );
  }
}

export default NoteItem;
