import React from "react";
import Folder from "./Folder";
import "./FolderList.css";

class FolderList extends React.Component {
  folderSelect = folder => {
    this.props.selectFolder(folder);
  };

  render() {
    // console.log(this.props);
    return (
      <div className="folder-list">
        <ul>
          {this.props.folders.map(dir => (
            <Folder
              folder={dir}
              key={dir.folder.folderId}
              notes={this.props.notes}
              selectFolder={this.props.selectFolder}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default FolderList;
