import React from "react";
import Folder from "./Folder";
import "./FolderList.css";

class FolderList extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="folder-list">
        <ul>
          {this.props.folders.map(folder => (
            <Folder
              folder={folder}
              key={folder.folderName.folderId}
              notes={this.props.notes}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default FolderList;
