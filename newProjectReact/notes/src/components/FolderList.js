import React from "react";

const FolderList = props => {
  return (
    <div className="folder-list">
      <ul>
        {props.folders.map(folder => (
          <li key={folder.folderId}>{folder.folderName}</li>
        ))}
      </ul>
    </div>
  );
};

export default FolderList;
