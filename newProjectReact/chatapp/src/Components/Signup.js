import React, { Component } from "react";

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "" };
  }

  handleChange = e => {
    this.setState({ username: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.username);
    console.log(this.state.username);
  };

  render() {
    return (
      <div className="form-container">
        <h1>Let's Talk</h1>
        <form onSubmit={this.handleSubmit} className="form">
          <label htmlFor="email">What is your Email?</label>
          <input
            type="email"
            name="username"
            onChange={this.handleChange}
            className="input"
          />
          <button className="submit">Submit</button>
        </form>
      </div>
    );
  }
}
