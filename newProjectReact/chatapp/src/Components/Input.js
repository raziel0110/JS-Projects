import React from "react";

export default class Input extends React.Component {
  state = { message: "" };

  handleChange = e => {
    this.setState({ message: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.message);
    this.setState({ message: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="input-field">
        <input
          className="message-input"
          type="text"
          onChange={this.handleChange}
          value={this.state.message}
        />

        <input className="message-submit" type="submit" value="Send" />
      </form>
    );
  }
}
