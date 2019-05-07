import React from "react";

class Folder extends React.Component {
  state = { folderSelect: false };
  toggleFolderSelectHandler = () => {
    let select = this.state.folderSelect;
    this.setState({ folderSelect: !select });
  };
  render() {
    console.log(this.props);
    console.log(this.state.folderSelect);
    return (
      <li onClick={() => this.toggleFolderSelectHandler()}>
        {this.props.folder.folderName}
      </li>
    );
  }
}

export default Folder;
