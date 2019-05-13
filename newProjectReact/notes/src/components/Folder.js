import React from "react";
import NoteItem from "./NoteItem";
import "./Folder.css";

class Folder extends React.Component {
  constructor(props) {
    super(props);
    this.noteItem = "";
    this.isSel = false;
  }
  state = { expandFolder: false, folderActive: false, itemId: null };

  showNote = item => {
    const { notes } = this.props.folder.folder;
    const note = notes.find(n => {
      return n.id === item.id;
    });
    note.isSelect = !note.isSelect;

    this.setState({ itemId: item.id });
  };

  getNoteBody = item => {
    const { notes } = this.props.folder.folder;
    const note = notes.find(n => {
      return n.id === item.id;
    });

    console.log(item.note);
  };

  toggleExapandHandler = e => {
    e.stopPropagation();
    let expand = this.state.expandFolder;
    this.setState({ expandFolder: !expand });
  };

  setActive = e => {
    let active = this.state.folderActive;
    this.setState({ folderActive: !active });
  };

  render() {
    const { folder } = this.props.folder;
    const { notes } = this.props.folder.folder;
    console.log(folder);
    const note_list =
      this.state.expandFolder &&
      notes.map(note => (
        <NoteItem
          note={note}
          key={note.id}
          showNoteItem={this.showNote}
          isSelect={note.id === this.state.itemId}
          showBody={this.getNoteBody}
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
              className={this.state.folderActive ? "active" : null}
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
