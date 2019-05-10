import React from "react";
import NoteItem from "./NoteItem";
import "./Folder.css";

class Folder extends React.Component {
  constructor(props) {
    super(props);
    this.noteItem = "";
    this.isSel = false;
  }
  state = { expandFolder: false, active: false };

  // checkIsSelect = note => {
  //   const { notes } = this.props.folder.folder;
  //   const n = notes.some(item => {
  //     return item.isSelect === true;
  //   });

  //   n.isSelect = false;
  // };

  onClickNoteItem = item => {
    const { notes } = this.props.folder.folder;
    // const note = notes.find(n => {
    //   return n.id === item.id;
    // });
    // this.noteItem = note.note;
    // item.isSelect = true;

    notes.forEach(element => {
      if (element.id === item.id) {
        element.isSelect = true;
      } else {
        element.isSelect = false;
      }
    });
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
    console.log(this.props.folder.folder.notes);
    const { folder } = this.props.folder;
    const { notes } = this.props.folder.folder;

    // const updateModal =

    const note_list =
      this.state.expandFolder &&
      notes.map(note => (
        <NoteItem
          note={note}
          key={note.id}
          showNoteItem={this.onClickNoteItem}
          // reset={this.checkIsSelect}
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
