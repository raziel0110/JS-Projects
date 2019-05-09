import React from "react";
import NoteItem from "./NoteItem";
import "./Folder.css";

class Folder extends React.Component {
  state = { expandFolder: false, active: false };
  toggleExapandHandler = e => {
    e.stopPropagation();
    let expand = this.state.expandFolder;
    this.setState({ expandFolder: !expand });
  };

  setActive = e => {
    let active = this.state.active;
    this.setState({ active: !active });
  };

  render() {
    console.log(this.state.active);
    const { folder } = this.props.folder;
    const { notes } = this.props.folder.folder;

    const note_list =
      this.state.expandFolder &&
      notes.map(note => (
        // <li key={note.id}>{note.note}</li>
        <NoteItem note={note} key={note.id} />
      ));
    return (
      <li>
        <div
          className="folder-items"
          onClick={() => {
            this.props.selectFolder(folder);
          }}
        >
          <div onClick={this.setActive}>
            <div className={this.state.active ? "active" : null}>
              {folder.folderName}
            </div>
            <div className="folder-list-items">
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
