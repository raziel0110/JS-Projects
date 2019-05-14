import React from "react";
import Modal from "./Modal";
import UpdateBox from "./UpdateBox";
import "./NoteItem.css";

class NoteItem extends React.Component {
  state = { showInfo: false };

  updateNote = item => {
    const note = this.props.note;
    note.note = item.textnote;
    note.noteTitle = item.textnote.substr(0, 15);
    this.props.onUpdate(note);
  };

  showInfo = () => {
    this.setState({ showInfo: true });
  };

  hideInfo = () => {
    this.setState({ showInfo: false });
  };
  render() {
    const modal = this.state.showInfo && (
      <Modal showInfo={this.showInfo}>
        <UpdateBox
          note={this.props.note}
          hideInfo={this.hideInfo}
          update={this.updateNote}
        />
      </Modal>
    );
    return (
      <div>
        <div className="folder-list-items" onDoubleClick={this.showInfo}>
          <li
            className={this.props.isSelect ? "activeItem" : null}
            onClick={() => {
              this.props.showNoteItem(this.props.note);
            }}
          >
            {this.props.note.noteTitle}
          </li>
        </div>
        {modal}
      </div>
    );
  }
}

export default NoteItem;
