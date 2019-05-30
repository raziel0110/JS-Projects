import React, { Component } from "react";
import UserInput from "./Components/UserInput";
import UserOutput from "./Components/UserOutput";

export default class App1 extends Component {
  state = { username: "" };
  changeHandler = e => {
    this.setState({ username: e.target.value });
  };

  render() {
    return (
      <div>
        <UserInput changed={this.changeHandler} />
        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username} />
      </div>
    );
  }
}
