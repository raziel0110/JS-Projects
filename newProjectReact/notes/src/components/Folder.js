import React from "react";

class Folder extends React.Component {
  state = { folderSelect: false, notes: [] };
  toggleFolderSelectHandler = () => {
    let select = this.state.folderSelect;
    this.setState({ folderSelect: !select });
  };

  saveNote = () => {
    const note = {};
    let id = 0;
    note.id = id + 1;
    note.text = this.props.note;
    const { notes } = this.state;
    notes.push(note);

    this.setState({ notes });
  };

  render() {
    console.log(this.props.note);
    console.log(this.state.folderSelect);
    return (
      <li onClick={() => this.toggleFolderSelectHandler()}>
        {this.props.folder.folderName}
      </li>
    );
  }
}

export default Folder;
