import React from "react";
import { Link } from "react-router-dom";

export default class New extends React.Component {
  state = {
    note: {
      title: "",
      body: "",
      createdAt: undefined,
      updatedAd: undefined
    }
  };

  updateValue = e => {
    const { note } = this.state;
    this.setState({
      note: { ...note, [e.target.name]: e.target.value }
    });
  };

  handleSave = async e => {
    e.preventDefault();

    const id = await this.props.onSave(this.state.note);
    this.props.history.replace(`/notes/${id}`);
  };
  render() {
    const { note } = this.state;
    return (
      <div className="">
        <h1>New Note</h1>
        <form onSubmit={this.handleSave}>
          <div className="">
            <label>Title</label>
            <input
              type="text"
              name="title"
              value={note.title}
              onChange={this.updateValue}
            />
          </div>

          <div className="">
            <textarea
              name="body"
              value={note.value}
              onChange={this.updateValue}
            />
          </div>

          <div className="">
            <button className="btn btn-primary">Save</button>
            <Link to="/">Cancel</Link>
          </div>
        </form>
      </div>
    );
  }
}
