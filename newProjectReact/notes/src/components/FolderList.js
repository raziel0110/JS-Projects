import React from "react";
import Folder from "./Folder";
import "./FolderList.css";
import { get } from "lodash";

class FolderList extends React.Component {
  state = { folderId: null };
  folderSelect = folder => {
    this.props.selectFolder(folder);
  };

  selectFolderhandler = folder => {
    const { folders } = this.props;
    const dir = folders.find(f => {
      return f.folderId === folder.folderId;
    });
  };

  render() {
    // console.log("Folder: ", get(this.props, "folders[0].folder.folderId"));
    return (
      <div className="folder-list">
        <ul>
          {this.props.folders.map(dir => (
            <Folder
              folder={dir}
              key={dir.folder.folderId}
              notes={this.props.notes}
              selectFolder={this.props.selectFolder}
              onUpdate={this.props.onUpdate}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default FolderList;
