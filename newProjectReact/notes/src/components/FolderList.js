import React from "react";
import Folder from "./Folder";
import "./FolderList.css";

class FolderList extends React.Component {
  state = { folderId: "" };

  selectFolderhandler = folder => {
    this.setState({ folderId: folder.folderId });
  };

  render() {
    return (
      <div className="folder-list">
        <ul>
          {this.props.folders.map(dir => (
            <Folder
              search={this.props.search}
              folder={dir}
              key={dir.folder.folderId}
              showFolder={this.selectFolderhandler}
              selectFolder={dir.folder.folderId === this.state.folderId}
              onUpdate={this.props.onUpdate}
              onDelete={this.props.onDelete}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default FolderList;
