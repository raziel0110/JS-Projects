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
              // found={this.props.found}
              search={this.props.search}
              folder={dir}
              key={dir.folder.folderId}
              //notes={dir.notes}
              showFolder={this.selectFolderhandler}
              selectFolder={dir.folder.folderId === this.state.folderId}
              onUpdate={this.props.onUpdate}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default FolderList;
