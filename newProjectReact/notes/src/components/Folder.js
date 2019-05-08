import React from "react";
import "./Folder.css";

class Folder extends React.Component {
  state = { folderSelect: false };
  toggleFolderSelectHandler = e => {
    e.stopPropagation();
    let select = this.state.folderSelect;
    this.setState({ folderSelect: !select });
  };

  selectFolder = e => {
    const { folder } = this.props.folder;
    folder.isSelected = true;
  };

  render() {
    console.log(this.props.folder);
    const { folder } = this.props.folder;
    const { notes, isSelected } = this.props.folder.folder;

    const note_list =
      isSelected && notes.map(note => <li key={note.id}>{note.note}</li>);
    return (
      <div
        className="folder-items"
        onDoubleClick={this.toggleFolderSelectHandler}
        onClick={() => {
          this.props.selectFolder(folder);
        }}
      >
        <div>
          <li className="folder-list-items">
            {`${folder.folderName}`}
            <ul>{note_list}</ul>
          </li>
        </div>
        <div>(+)</div>
      </div>
    );
  }
}

export default Folder;
