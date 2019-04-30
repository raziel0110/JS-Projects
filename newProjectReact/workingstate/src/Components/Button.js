import React, { Component } from "react";

export default class Button extends Component {
  state = { value: 0 };
  updateValue = () => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    return <button onClick={this.updateValue}>{this.state.value}</button>;
  }
}
