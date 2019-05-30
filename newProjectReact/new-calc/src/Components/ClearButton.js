import React, { Component } from "react";
import "./ClearButton.css";

export default class ClearButton extends Component {
  render() {
    return (
      <button className="clear-button" onClick={() => this.props.handleClick()}>
        Clear
      </button>
    );
  }
}
