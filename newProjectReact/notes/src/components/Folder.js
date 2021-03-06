import React from "react";
import NoteItem from "./NoteItem";
import "./Folder.css";

class Folder extends React.Component {
  state = {
    expandFolder: true,
    folderActive: false,
    itemId: null,
    openInfo: false
  };

  showNote = item => {
    const { notes } = this.props.folder.folder;
    const note = notes.find(n => {
      return n.id === item.id;
    });
    note.isSelect = !note.isSelect;
    this.setState({ itemId: item.id });
  };

  toggleExapandHandler = e => {
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
    if (this.props.selectFolder) {
      folder.isSelected = true;
    } else {
      folder.isSelected = false;
    }

    const note_list =
      this.state.expandFolder &&
      notes.map(note => (
        <NoteItem
          note={note}
          key={note.id}
          showNoteItem={this.showNote}
          isSelect={note.id === this.state.itemId}
          onUpdate={() => this.props.onUpdate(note.note)}
          onDelete={this.props.onDelete}
        />
      ));
    return (
      <li>
        <div className="folder-items">
          <div>
            <div
              className={this.props.selectFolder === true ? "active" : null}
              onClick={() => this.props.showFolder(folder)}
            >
              {folder.folderName}
            </div>
            <div>
              <ul>{note_list}</ul>
            </div>
          </div>
          <div onClick={this.toggleExapandHandler}>
            {this.state.expandFolder ? "( - )" : "( + )"}
          </div>
        </div>
      </li>
    );
  }
}

export default Folder;
