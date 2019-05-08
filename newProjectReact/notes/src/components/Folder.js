import React from "react";
import "./Folder.css";

class Folder extends React.Component {
  state = { folderSelect: false };
  toggleFolderSelectHandler = e => {
    e.stopPropagation();
    let select = this.state.folderSelect;
    this.setState({ folderSelect: !select });
  };

  render() {
    console.log(this.props);
    const { folderName } = this.props.folder;
    // console.log("[folder.js]", folderName);

    const note_list =
      this.state.folderSelect &&
      this.props.notes.map(note => <li key={note.id}>{note.note}</li>);
    return (
      <div className="folder-items">
        <div>
          <li className="folder-list-items">
            {`${folderName.folderName}`}
            <ul>{note_list}</ul>
          </li>
        </div>
        <div onClick={this.toggleFolderSelectHandler}>(+)</div>
      </div>
    );
  }
}

export default Folder;
