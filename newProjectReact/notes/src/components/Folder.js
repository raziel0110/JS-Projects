import React from "react";
import NoteItem from "./NoteItem";
import "./Folder.css";

class Folder extends React.Component {
  state = { expandFolder: false, active: false };

  onClickNoteItem = item => {
    const { notes } = this.props.folder.folder;
    const note = notes.find(n => {
      return n.id === item.id;
    });
    console.log(note);
  };

  toggleExapandHandler = e => {
    e.stopPropagation();
    let expand = this.state.expandFolder;
    this.setState({ expandFolder: !expand });
  };

  setActive = e => {
    // e.stopPropagation();
    let active = this.state.active;
    this.setState({ active: !active });
  };

  render() {
    const { folder } = this.props.folder;
    const { notes } = this.props.folder.folder;

    const note_list =
      this.state.expandFolder &&
      notes.map(note => (
        <NoteItem
          note={note}
          key={note.id}
          showNoteItem={this.onClickNoteItem}
        />
      ));
    return (
      <li>
        <div
          className="folder-items"
          onClick={() => {
            this.props.selectFolder(folder);
          }}
        >
          <div>
            <div
              className={this.state.active ? "active" : null}
              onClick={this.setActive}
            >
              {folder.folderName}
            </div>
            <div>
              <ul>{note_list}</ul>
            </div>
          </div>
          <div onClick={this.toggleExapandHandler}>(+)</div>
        </div>
      </li>
    );
  }
}

export default Folder;
