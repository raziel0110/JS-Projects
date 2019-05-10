import React from "react";
import "./NoteItem.css";

class NoteItem extends React.Component {
  state = { activeItem: false };

  setItemActive = () => {
    const active = this.props.note.isSelect;
    this.setState({ activeItem: active });
  };

  render() {
    console.log(this.state.activeItem);
    console.log(this.props.note);
    return (
      <div>
        <div
          className="folder-list-items"
          onClick={() => {
            this.setItemActive();
          }}
        >
          <li
            className={this.props.note.isSelect ? "activeItem" : null}
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
