import React from "react";
import NoteItem from "./NoteItem";
import "./Folder.css";

class Folder extends React.Component {
  state = {
    expandFolder: true,
    folderActive: false,
    itemId: null,
    openInfo: false,
    filterdNote: []
  };

  showNote = item => {
    const { notes } = this.props.folder.folder;
    const note = notes.find(n => {
      return n.id === item.id;
    });
    note.isSelect = !note.isSelect;
    this.setState({ itemId: item.id });
  };

  updateNote = item => {
    const { notes } = this.props.folder.folder;
    const note = notes.find(n => {
      return n.id === item.id;
    });
    this.props.onUpdate(note);
  };

  toggleExapandHandler = e => {
    let expand = this.state.expandFolder;
    this.setState({ expandFolder: !expand });
  };

  setActive = e => {
    let active = this.state.folderActive;
    this.setState({ folderActive: !active });
  };

  static getDerivedStateFromProps(props) {
    const { notes } = props.folder.folder;
    let filtered = notes.filter(note => {
      return (
        note.noteTitle.toUpperCase().indexOf(props.search.toUpperCase()) !== -1
      );
    });
    return { filterdNote: filtered };
  }

  // componentDidMount() {
  //   if (this.state.filterdNote.length > -1) {
  //     this.props.found(this.state.filterdNote.length);
  //   }
  // }

  render() {
    const { folder } = this.props.folder;
    //const { notes } = this.props.folder.folder;
    if (this.props.selectFolder) {
      folder.isSelected = true;
    } else {
      folder.isSelected = false;
    }

    const note_list =
      this.state.expandFolder &&
      this.state.filterdNote.map(note => (
        <NoteItem
          note={note}
          key={note.id}
          showNoteItem={this.showNote}
          isSelect={note.id === this.state.itemId}
          onUpdate={() => this.props.onUpdate(note.note)}
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
