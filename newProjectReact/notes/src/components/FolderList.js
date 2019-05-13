import React from "react";
import Folder from "./Folder";
import "./FolderList.css";

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
    // dir.isSelected = !folder.isSelected;
    // console.log(dir);
    // this.setState({ folderId: folder.id });
  };

  render() {
    //console.log(this.props.folders[0].folder);
    const folders = Object.values(this.props.folders);
    console.log(folders["0"].folder);
    return (
      <div className="folder-list">
        <ul>
          {this.props.folders.map(dir => (
            <Folder
              folder={dir}
              key={dir.folder.folderId}
              notes={this.props.notes}
              // selectFolder={this.props.selectFolder}
              selectFolder={this.selectFolderhandler}
              // isFolderSelect={}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default FolderList;
