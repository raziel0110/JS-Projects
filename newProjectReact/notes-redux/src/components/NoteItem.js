import React from "react";
import Modal from "./Modal";
import UpdateBox from "./UpdateBox";
import "./NoteItem.css";

class NoteItem extends React.Component {
  state = { showInfo: false };

  updateNote = item => {
    const note = this.props.note;
    note.note = item.textnote;
    note.date = `Updated at: ${new Date().toLocaleString()}`;
    this.props.onUpdate(note);
  };

  deleteNote = () => {
    this.props.onDelete(this.props.note);
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
            <div className="list-item">
              <div className="content">
                <div className="list-item-title">
                  {this.props.note.noteTitle}
                </div>
                <div className="list-item-date">{this.props.note.date}</div>
              </div>

              <div className="btn-del">
                <button type="button" className="del" onClick={this.deleteNote}>
                  x
                </button>
              </div>
            </div>
          </li>
        </div>
        {modal}
      </div>
    );
  }
}

export default NoteItem;
