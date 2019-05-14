import React from "react";
import Modal from "./Modal";
import UpdateBox from "./UpdateBox";
import "./NoteItem.css";

class NoteItem extends React.Component {
  state = { showInfo: false };
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
          onUpdate={this.props.onUpdate}
        />
      </Modal>
    );

    console.log(this.state.showInfo);
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
