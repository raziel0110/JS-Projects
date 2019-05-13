import React from "react";

export default class ShowPage extends React.Component {
  render() {
    const { note } = this.props;
    console.log(note);
    return (
      <div>
        <h1>{note.title}</h1>
        <div>{note.body}</div>
      </div>
    );
  }
}
