import React, { Component } from "react";
import "./Button.css";

export default class Button extends Component {
  render() {
    return (
      <button
        className={`buttons ${this.props.className}`}
        onClick={() => this.props.handleClick(this.props.children)}
      >
        {this.props.children}
      </button>
    );
  }
}
