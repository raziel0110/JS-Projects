import React, { Component } from "react";
import "./Input.css";

export default class Input extends Component {
  render() {
    return (
      <input
        type="text"
        className="display"
        value={this.props.value}
        readOnly
      />
    );
  }
}
