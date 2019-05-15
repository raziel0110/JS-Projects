import React from "react";
import Folder from "./Folder";
import "./FolderList.css";

class FolderList extends React.Component {
  state = { folderId: "" };

  selectFolderhandler = folder => {
    const { folders } = this.props;
    console.log(folders);
    const dir = folders.find(f => {
      return f.folder.folderId === folder.folderId;
    });
    console.log(folder.folderId);
    console.log(dir.folder.isSelected);
    this.setState({ folderId: folder.folderId });
  };

  render() {
    return (
      <div className="folder-list">
        <ul>
          {this.props.folders.map(dir => (
            <Folder
              folder={dir}
              key={dir.folder.folderId}
              notes={this.props.notes}
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
