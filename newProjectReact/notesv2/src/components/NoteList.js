import React from "react";
import { Link } from "react-router-dom";

export default class NoteList extends React.Component {
  renderNotes = () => {
    const notes = Object.values(this.props.notes);
    return notes.map(n => (
      <div key={this.props.notes._id}>
        <h4>
          <Link to={`/notes/${n._id}`}>{n.title}</Link>
        </h4>
      </div>
    ));
  };
  render() {
    console.log(this.props.notes);
    return <div>{this.renderNotes()}</div>;
  }
}
