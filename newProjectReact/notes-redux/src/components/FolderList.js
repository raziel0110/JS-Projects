import React from "react";
import Folder from "./Folder";
import "./FolderList.css";

class FolderList extends React.Component {
  state = { folderId: "" };

  selectFolderhandler = folder => {
    this.setState({ folderId: folder.folderId });
  };

  render() {
    console.log(this.props);
    return (
      <div className="folder-list">
        <ul>
          {this.props.folders.map(dir => (
            <Folder
              search={this.props.search}
              folder={dir}
              key={dir.folderId}
              showFolder={this.selectFolderhandler}
              selectFolder={dir.folderId === this.state.folderId}
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
